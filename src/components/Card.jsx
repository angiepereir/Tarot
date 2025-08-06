export default function Card({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full aspect-[3/5] rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden bg-white"
    >
      <img
        src="/dorso-card.png"
        alt="Carta boca abajo"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
