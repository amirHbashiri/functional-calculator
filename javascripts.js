const numbers = document.querySelectorAll(".part1");
const result = document.querySelector(".result");
const Presult = document.querySelector(".prevres");
const equal = document.querySelector(".equalbtn");
const add = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multiple");
const divid = document.querySelector(".taghsim");
const tavan = document.querySelector(".tavan2");
const radic = document.querySelector(".rad2");
const per = document.querySelector(".percent");
const dot = document.querySelector(".dot");
const onx = document.querySelector(".oneonx");
const plusminus = document.querySelector(".pm");
const cbtn = document.querySelector(".c");
const cebtn = document.querySelector(".ce");
const delbtn = document.querySelector(".del");
const mr = document.getElementById("mr");
const mc = document.getElementById("mc");
const state = {
  firstNumber: "",
  secondNumber: "",
  result: "",
  operator: "",
};
let calculationMemory = [];

const shownum = () => {
  if (state.operator === "") {
    result.textContent = state.firstNumber;
  } else {
    result.textContent = state.secondNumber;
  }
};

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    if (state.firstNumber === "" && state.operator === "") {
      result.textContent += el.textContent;
    }
    if (state.operator && state.firstNumber) {
      state.secondNumber += el.textContent;
    } else {
      state.firstNumber += el.textContent;
    }
    if (state.result) {
      state.firstNumber === state.result;
      state.result = "";
      state.secondNumber = "";
      if (state.firstNumber === "" && state.operator === "") {
        result.textContent += el.textContent;
      }
      if (state.operator && state.firstNumber) {
        state.secondNumber += el.textContent;
      } else {
        state.firstNumber += el.textContent;
      }
    }
    shownum();
  });
});

function addfunction() {
  state.operator = "+";
  if (!state.secondNumber) {
    state.secondNumber = result.textContent;
  }
  const sum = Number(state.firstNumber) + Number(state.secondNumber);
  Presult.textContent = state.firstNumber + " + " + state.secondNumber + " = ";
  state.firstNumber = sum;
  state.result = sum;
  result.textContent = state.result;
  state.secondNumber = "";
}

add.addEventListener("click", () => {
  state.operator = "+";
  if (!state.secondNumber) {
    const sum = Number(state.firstNumber) + Number(state.secondNumber);
    state.firstNumber = sum;
    Presult.textContent = state.firstNumber + " + ";
    result.textContent = state.firstNumber;
  } else {
    const sum = Number(state.firstNumber) + Number(state.secondNumber);
    state.firstNumber = sum;
    Presult.textContent = state.firstNumber + " + ";
    state.secondNumber = sum;
    result.textContent = sum;
    state.secondNumber = "";
  }
});

function menhafunction() {
  state.operator = "-";
  if (!state.secondNumber) {
    state.secondNumber = result.textContent;
  }
  const menha = Number(state.firstNumber) - Number(state.secondNumber);
  Presult.textContent = state.firstNumber + " - " + state.secondNumber + " = ";
  state.firstNumber = menha;
  state.result = menha;
  result.textContent = state.result;
  state.secondNumber = "";
}

minus.addEventListener("click", () => {
  state.operator = "-";
  if (!state.secondNumber) {
    const menha = Number(state.firstNumber) - Number(state.secondNumber);
    state.firstNumber = menha;
    Presult.textContent = state.firstNumber + " - ";
    result.textContent = state.firstNumber;
  } else {
    const menha = Number(state.firstNumber) - Number(state.secondNumber);
    state.firstNumber = menha;
    Presult.textContent = state.firstNumber + " - ";
    state.secondNumber = result.textContent;
    state.secondNumber = "";
    result.textContent = menha;
  }
});

function multifunction() {
  state.operator = "X";
  if (!state.secondNumber) {
    state.secondNumber = result.textContent;
  }
  const zarb = Number(state.firstNumber) * Number(state.secondNumber);
  Presult.textContent = state.firstNumber + " x " + state.secondNumber + " = ";
  state.firstNumber = zarb;
  state.result = zarb;
  result.textContent = state.result;
  state.secondNumber = "";
}

multi.addEventListener("click", () => {
  state.operator = "X";
  const multi = Number(state.firstNumber) * Number(state.secondNumber);
  if (state.firstNumber && !state.secondNumber) {
    Presult.textContent = state.firstNumber + " x ";
    result.textContent = state.firstNumber;
    return;
  } else {
    state.firstNumber = multi;
    state.secondNumber = "";
    Presult.textContent = state.firstNumber + " x ";
    result.textContent = state.firstNumber;
  }
});

function dividfunction() {
  if (state.firstNumber && !state.secondNumber) {
    state.secondNumber = result.textContent;
  }
  const divid = Number(state.firstNumber) / Number(state.secondNumber);
  Presult.textContent = state.firstNumber + " / " + state.secondNumber + " = ";
  state.firstNumber = divid;
  state.result = divid;
  result.textContent = state.result;
  state.secondNumber = "";
}

divid.addEventListener("click", () => {
  state.operator = "/";
  if (!state.secondNumber) {
    // const divid = Number(state.firstNumber) / Number(state.secondNumber);
    // state.firstNumber = divid;
    Presult.textContent = state.firstNumber + " ÷ ";
    result.textContent = state.firstNumber;
  } else {
    const divid = Number(state.firstNumber) / Number(state.secondNumber);
    Presult.textContent = state.firstNumber + " ÷ ";
    state.secondNumber = "";
    state.secondNumber = result.textContent;
    state.firstNumber = divid;
    // result.textContent = divid;
  }
  if (state.result) {
    // state.firstNumber = "";
    Presult.textContent = state.firstNumber + "÷";
    result.textContent = state.firstNumber;
  }
});

tavan.addEventListener("click", () => {
  state.operator = "t2";
  Presult.textContent = "sqr(" + state.firstNumber + ")";
  const t2 = Number(state.firstNumber) * Number(state.firstNumber);
  state.firstNumber = Number(t2).toFixed(2);
  result.textContent = state.firstNumber;
});

radic.addEventListener("click", () => {
  state.operator = "rad";
  Presult.textContent = "√" + state.firstNumber;
  const rad = Math.sqrt(Number(state.firstNumber));
  state.firstNumber = rad;
  result.textContent = state.firstNumber;
});

function radfunction() {
  Presult.textContent = "√" + state.firstNumber;
  const rad = Math.sqrt(Number(state.firstNumber));
  state.firstNumber = rad;
  result.textContent = state.firstNumber;
}

per.addEventListener("click", () => {
  if (!state.firstNumber) {
    result.textContent = "0";
    Presult.textContent = "0";
    return;
  }
  switch (state.operator) {
    case "+":
      state.secondNumber = result.textContent;
      const per =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = per;
      Presult.textContent = state.firstNumber + " + " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "+";
      break;
    case "-":
      state.secondNumber = result.textContent;
      const perm =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = perm;
      Presult.textContent = state.firstNumber + " - " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "-";
      break;
    case "X":
      state.secondNumber = Number(result.textContent) / 100;
      Presult.textContent = state.firstNumber + " X " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "X";
      break;
    case "/":
      state.secondNumber = result.textContent;
      const pert =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = pert;
      Presult.textContent = state.firstNumber + " ÷ " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "/";
      break;
  }
});

function pminus() {
  state.firstNumber = -Number(result.textContent);
  result.textContent = state.firstNumber;
  if (result.textContent.includes("-")) {
    result.textContent = state.firstNumber;
  }
}

plusminus.addEventListener("click", () => {
  pminus();
});

function onxfunction() {
  state.firstNumber = Number(result.textContent);
  Presult.textContent = "1" + "/" + "(" + `${state.firstNumber}` + ")";
  result.textContent = 1 / Number(state.firstNumber);
}

dot.addEventListener("click", () => {
  if (!state.operator && !result.textContent.includes(".")) {
    result.textContent = result.textContent + ".";
    state.firstNumber = result.textContent;
    shownum();
  } else if (state.firstNumber && result.textContent) {
    result.textContent = "0.";
    state.secondNumber = result.textContent;
    shownum();
  }
  if (state.operator && !state.secondNumber.includes(".")) {
    result.textContent = result.textContent + ".";
    state.secondNumber = result.textContent;
    shownum();
  }
});

onx.addEventListener("click", () => {
  onxfunction();
});

function cfunction() {
  state.firstNumber = "";
  state.secondNumber = "";
  state.operator = "";
  Presult.textContent = "";
  result.textContent = "0";
}

cbtn.addEventListener("click", () => {
  cfunction();
});

function cefunction() {
  state.secondNumber = "";
  result.textContent = "0";
}

cebtn.addEventListener("click", () => {
  cefunction();
});

function delfunction() {
  if (!state.operator) {
    state.firstNumber = result.textContent;
    state.firstNumber = result.textContent.slice(
      0,
      result.textContent.length - 1
    );
    result.textContent = state.firstNumber;
    if (result.innerHTML == 0) {
      state.firstNumber = "";
      result.textContent = Number(state.firstNumber);
    }
    if (result.textContent.includes("-")) {
      state.firstNumber = Number("");
      result.textContent = state.firstNumber;
    }
    result.textContent = Number(state.firstNumber);
  } else {
    state.secondNumber = result.textContent;
    state.secondNumber = result.textContent.slice(
      0,
      result.textContent.length - 1
    );
    result.textContent = state.secondNumber;
    if (result.innerHTML == 0) {
      state.secondNumber = "";
      result.textContent = Number(state.secondNumber);
    }
    if (result.textContent.includes("-")) {
      state.secondNumber = Number("");
      result.textContent = state.secondNumber;
    }
    result.textContent = Number(state.secondNumber);
  }
}

delbtn.addEventListener("click", () => {
  delfunction();
});

equal.addEventListener("click", () => {
  switch (state.operator) {
    case "+":
      addfunction();
      historyAddItem(Presult.textContent, result.textContent);
      break;
    case "-":
      menhafunction();
      historyAddItem(Presult.textContent, result.textContent);
      break;
    case "X":
      multifunction();
      historyAddItem(Presult.textContent, result.textContent);
      break;
    case "/":
      dividfunction();
      historyAddItem(Presult.textContent, result.textContent);
      break;
    case "rad":
      radfunction();
      historyAddItem(Presult.textContent, result.textContent);
      break;
  }
});

const memorybtn = document.querySelector(".memory");
let memorylist = document.querySelector(".memory-show-item");
const historylist = document.querySelector(".history-show-item");
const historybtn = document.querySelector(".history");
const deleteBtn = document.querySelector(".delete-btn");

let historyItems = [];
let Id = 0;
historylist.innerHTML = "There's no history yet!";
historylist.style.display = "block";

const historyAddItem = () => {
  historyItems.push({
    ope: Presult.textContent,
    res: result.textContent,
    id: Id,
  });
  Id++;
  if (
    historylist.style.display === "block" ||
    historylist.style.display === "flex"
  ) {
    showhistory();
  }
};

const delbt = document.createElement("button");
delbt.innerText = "Delete";
delbt.style.width = "50px";
delbt.style.height = "20px";
delbt.classList.add("historyitem");

const showhistory = () => {
  historylist.innerHTML = "";
  if (historyItems.length > 0) {
    for (let i of historyItems) {
      const historyitem = document.createElement("li");
      const { ope, res, id } = i;
      historyitem.id = id;
      historyitem.classList.add("historyitem");
      historyitem.innerHTML = `${ope} <br> <span>${res}</span>`;
      historylist.prepend(historyitem);
    }

    historylist.addEventListener("click", function (e) {
      e.target.appendChild(delbt);
      delbt.addEventListener("click", function () {
        let m = +delbt.parentElement.id;
        const x = historyItems.filter((i) => {
          return m != i.id;
        });
        historyItems = [...x];
        showhistory();
      });
    });

    if (historylist.style.display !== "none") {
      deleteBtn.style.display = "block";
    }
  } else {
    historylist.innerHTML = "There's no history here!";
    historylist.style.display = "block";
  }
};

historybtn.addEventListener("click", () => {
  historybtn.classList.add("selected");
  memorybtn.classList.remove("selected");
  historylist.style.display = "block";
  historylist.innerHTML = "There's no history yet!";
  memorylist.style.display = "none";
  if (historyItems.length > 0) {
    deleteBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
  }
  showhistory();
});

const historyClear = () => {
  historyItems = [];
  deleteBtn.style.display = "none";
  showhistory();
};

deleteBtn.addEventListener("click", () => {
  if (historyItems.length > 0 && historylist.style.display !== "none") {
    historyClear();
    deleteBtn.style.display = "none";
    showhistory();
  }
});

const memorybtns = document.querySelector(".mbots");
const memoryListItems = document.querySelector(".memory-show-item");
const memory = document.querySelector(".memory-text");
const clearMemoryBtn = document.querySelector(".mc");
const memoryrestorebtn = document.querySelector(".mr");

const container = document.createElement("div");
const mplusBtn = document.createElement("button");
const mminusBtn = document.createElement("button");
const mclearBtn = document.createElement("button");

const restoreMemory = (memoryRestoreValue) => {
  result.textContent = memoryRestoreValue;
  state.firstNumber = memoryRestoreValue;
  callShowMemory();
};

let memoryRestoreValue;
let countMemoryId = 0;

const showMemory = () => {
  memoryListItems.innerHTML = "";
  memoryListItems.style.width = "97%";
  if (calculationMemory.length > 0) {
    for (let memoryItems of calculationMemory) {
      const { memoryItem, id } = memoryItems;
      const listMemory = document.createElement("li");
      listMemory.style.width = "100%";
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.width = "100%";
      mplusBtn.innerHTML = "M+";
      mplusBtn.style.border = "2px solid black";
      mplusBtn.style.marginInline = "5px";
      mplusBtn.classList.add("historyitem");
      mminusBtn.innerHTML = "M-";
      mminusBtn.style.border = "2px solid black";
      mminusBtn.style.marginInline = "5px";
      mminusBtn.classList.add("historyitem");
      mclearBtn.innerHTML = "MC";
      mclearBtn.style.border = "2px solid black";
      mclearBtn.style.marginInline = "5px";
      mclearBtn.classList.add("historyitem");
      container.appendChild(mplusBtn);
      container.appendChild(mminusBtn);
      container.appendChild(mclearBtn);
      listMemory.id = id;
      listMemory.classList.add("historyitem");
      listMemory.innerHTML = `${memoryItem}`;
      listMemory.addEventListener("click", function (e) {
        e.target.appendChild(container);
      });

      memoryListItems.prepend(listMemory);
    }
    if (memoryListItems.style.display !== "none") {
      deleteBtn.style.display = "block";
    }
  } else {
    memoryListItems.innerHTML = "There's nothing saved in memory";
    memoryListItems.style.display = "block";
  }
};

mclearBtn.addEventListener("click", function () {
  let m = +mclearBtn.parentElement.parentElement.id;
  const x = calculationMemory.filter((i) => {
    return m != i.id;
  });
  calculationMemory = [...x];
  showMemory();
});

const mouseover1 = function () {
  memoryrestorebtn.style.backgroundColor = "var(--color-hover)";
};
const mouseout1 = function () {
  memoryrestorebtn.style.backgroundColor = "var(--color-primary)";
};

const mouseover2 = function () {
  clearMemoryBtn.style.backgroundColor = "var(--color-hover)";
};
const mouseout2 = function () {
  clearMemoryBtn.style.backgroundColor = "var(--color-primary)";
};

const memoryAddItem = () => {
  calculationMemory.push({
    memoryItem: result.textContent,
    id: countMemoryId,
  });
  countMemoryId++;
  if (
    memoryListItems.style.display === "block" ||
    memoryListItems.style.display === "flex"
  ) {
    showMemory();
  }
  memoryrestorebtn.classList.remove("same");
  memoryrestorebtn.style.cursor = "pointer";
  memoryrestorebtn.addEventListener("mouseover", mouseover1);
  memoryrestorebtn.addEventListener("mouseout", mouseout1);
  clearMemoryBtn.classList.remove("same");
  clearMemoryBtn.style.cursor = "pointer";
  clearMemoryBtn.addEventListener("mouseover", mouseover2);
  clearMemoryBtn.addEventListener("mouseout", mouseout2);
};

const memoryPlus = () => {
  let memoryPlusValue =
    calculationMemory[calculationMemory.length - 1].memoryItem;
  memoryPlusValue = Number(memoryPlusValue) + Number(result.textContent);
  calculationMemory[calculationMemory.length - 1].memoryItem = memoryPlusValue;
  callShowMemory();
};

const memoryminus = () => {
  let memoryminusValue =
    calculationMemory[calculationMemory.length - 1].memoryItem;
  memoryminusValue = Number(memoryminusValue) - Number(result.textContent);
  calculationMemory[calculationMemory.length - 1].memoryItem = memoryminusValue;
  callShowMemory();
};

const memoryClear = () => {
  calculationMemory = [];
  clearMemoryBtn.classList.add("same");
  memoryrestorebtn.classList.add("same");
  deleteBtn.style.display = "none";
  callShowMemory();
};

const memoryRestore = () => {
  let memoryRestoreValue =
    calculationMemory[calculationMemory.length - 1].memoryItem;
  restoreMemory(memoryRestoreValue);
  console.log(memoryRestoreValue);
};

const callShowMemory = () => {
  if (
    memoryListItems.style.display === "block" ||
    memoryListItems.style.display === "flex"
  ) {
    showMemory();
  }
};

memorybtn.addEventListener("click", () => {
  historylist.style.display = "none";
  historybtn.classList.remove("selected");
  memorybtn.classList.add("selected");
  memorylist.innerHTML = "There's nothing saved in memory";
  memorylist.style.display = "block";
  historylist.style.display = "none";
  if (calculationMemory.length > 0) {
    deleteBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
  }
  showMemory();
});

mr.addEventListener("click", () => {
  memoryRestore();
});
mc.addEventListener("click", () => {
  memoryClear();
  clearMemoryBtn.removeEventListener("mouseover");
  memoryrestorebtn.removeEventListener("mouseover");
});

memorybtns.addEventListener("click", (e) => {
  let memorybtnclick = e.target.classList.value;
  switch (memorybtnclick) {
    case "mbt mpl":
      if (calculationMemory.length === 0) {
        memoryAddItem();
      } else {
        memoryPlus();
      }
      break;
    case "mbt mns":
      if (calculationMemory.length === 0) {
        memoryAddItem();
      } else {
        memoryminus();
      }
      break;
    case "mbt mss":
      memoryAddItem();
      break;
  }
});

mplusBtn.addEventListener("click", memoryPlus);
mminusBtn.addEventListener("click", memoryminus);

deleteBtn.addEventListener("click", () => {
  if (
    calculationMemory.length > 0 &&
    memoryListItems.style.display !== "none"
  ) {
    memoryClear();
    deleteBtn.style.display = "none";
    showMemory();
  }
});

const clockBtn = document.querySelector(".clockbt");
const maincont = document.getElementById("maincontainer");
const main = document.getElementById("mainbuts");

const clockstyle = () => {
  let show = document.querySelector(".clockvision");
  if (historyItems.length == 0) {
    show.innerHTML = "There's no history here!";
  } else if (historyItems.length > 0) {
    historyItems.forEach((x) => {
      const historyitem = document.createElement("li");
      historyitem.id = x.id;
      historyitem.classList.add("historyitem");
      historyitem.innerHTML = `${x.ope} <br> <span>${x.res}</span>`;
      historylist.prepend(historyitem);
      show.innerHTML = historylist.innerHTML;
    });
    historylist.addEventListener("click", function (e) {
      let m = +e.target.id;
      const x = historyItems.filter((i) => {
        return m != i.id;
      });
      historyItems = [];
      historyItems = [...x];
      showhistory();
    });
  }
};

clockBtn.addEventListener("click", function () {
  const show = document.querySelector(".clockvision");
  if (show.style.display === "none") {
    main.style.display = "none";
    show.textContent = "There's no history here!";
    show.style.display = "block";
    clockstyle();
  } else {
    main.style.display = "block";
    show.style.display = "none";
  }
});

deleteBtn.addEventListener("click", () => {
  if (historyItems.length > 0 && historylist.style.display !== "none") {
    historyClear();
    deleteBtn.style.display = "none";
    showhistory();
  }
});
