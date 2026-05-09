function StatReseau({ lignes }) {
  const totalLignes = lignes.length;

  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);

  const ligneMax = lignes.reduce((max, l) =>
    l.arrets > max.arrets ? l : max
  );

  return (
    <div className="stats">
      <p>Total lignes : {totalLignes}</p>
      <p>Total arrêts : {totalArrets}</p>
      <p>Ligne la plus longue : {ligneMax.numero} ({ligneMax.arrets} arrêts)</p>
    </div>
  );
}

export default StatReseau;