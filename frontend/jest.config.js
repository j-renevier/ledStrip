module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Utilisé pour les tests côté navigateur (React)
  collectCoverage: true, // Active la collecte de couverture de code
  coverageDirectory: "./coverage", // Dossier où la couverture sera stockée
  coverageReporters: ["text", "lcov"], // Rapports de couverture (textuel et lcov)
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Extensions de fichiers à traiter
  testMatch: ["<rootDir>/src/**/*.test.(ts|tsx|js|jsx)"], // Recherche de fichiers de tests
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Ajout de matchers pour les tests avec React
};