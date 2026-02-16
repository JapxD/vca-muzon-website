import { useState, useEffect } from "react";
import Modal from "./Modal.tsx";
import ModalTextArea from "./ModalTextArea";
import ModalInput from "./ModalInput";
import Button from "./Button";
import Spinner from "./Spinner.tsx";
import { suggestionSchema } from "../schemas/suggestionsSchema.ts";
import { submitSuggestion } from "../services/jiraApi.ts";

const Suggestions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    summary?: string;
    description?: string;
  }>({});
  const [modalLoading, setModalLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    } // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle modal save with validation
  const handleModalSave = async () => {
    setMessage("");
    const result = suggestionSchema.safeParse({ summary, description });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setMessage("❌ Invalid input. Please check the fields.");
    } else {
      try {
        setModalLoading(true);
        await submitSuggestion(summary, description).then(
          ({ message: jiraMessage }) => {
            setMessage(`✅ ${jiraMessage}`);
          },
        );

        setSummary("");
        setDescription("");
      } catch (error: any) {
        setMessage(`❌ Failed to submit suggestion: ${error.message}`);
      } finally {
        setErrors({});
        setModalLoading(false);
      }
    }
  };

  return (
    <>
      {/* Add Suggestions Button */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Suggest improvements!"
      >
        <div className="flex flex-col w-full justify-left gap-5 py-2">
          <ModalInput
            value={summary}
            onChange={setSummary}
            placeholder="Write Suggestions"
            label="Suggestion"
            message={errors.summary}
          />
          <ModalTextArea
            value={description}
            onChange={setDescription}
            placeholder="Write Description"
            label="Description"
            row={4}
            message={errors.description}
          />
          <div className="self-end flex gap-4">
            {modalLoading && <Spinner />}
            <p className="self-center">{message}</p>
            <Button title="Save" handleClick={handleModalSave}></Button>
          </div>
        </div>
      </Modal>
      <Button
        className="fixed bottom-10 text-sm right-10 p-3 bg-white/50 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,.30)] hover:cursor-pointer
          transition-all duration-150 hover:-translate-y-2 hover:shadow-[0_10px_15px_0_rgba(0,0,0,.30)"
        title="Help us improve this site →"
        handleClick={() => setIsOpen(true)}
      />
    </>
  );
};

export default Suggestions;
