const harta = () => {
  try {
    return 1;
  } catch {
    console.log("catch...");
  } finally {
    console.log("Finally!");
  }
};

const kaka = harta();
console.log(kaka);
