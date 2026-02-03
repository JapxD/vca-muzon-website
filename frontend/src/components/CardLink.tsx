interface CardLinkProp {
  cardTitle: string;
  paragraph: string;
}

const CardLink = ({ cardTitle, paragraph }: CardLinkProp) => {
  return (
    <a
      href="/invite"
      className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 text-center"
    >
      <h3 className="text-3xl font-semibold mb-4 group-hover:text-[var(--color-accent)]">
        {cardTitle}
      </h3>
      <p className="text-[var(--color-text-secondary)]">{paragraph}</p>
    </a>
  );
};

export default CardLink;
