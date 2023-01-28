import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((c) => {
        return (
          <Card
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}
            onClose={() => window.alert("onClose")}
          />
        );
      })}
    </div>
  );
}
