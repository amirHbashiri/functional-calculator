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

const state = {
  firstNumber: "",
  secondNumber: "",
  result: "",
  operator: "",
};

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
    state.secondNumber = result.textContent;
    state.secondNumber = "";
    result.textContent = sum;
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
  if (!state.secondNumber) {
    state.secondNumber = result.textContent;
  }
  const divid = Number(state.firstNumber) / Number(state.secondNumber);
  Presult.textContent = state.firstNumber + " / " + state.secondNumber + " = ";
  state.firstNumber = divid;
  state.result = divid;
  result.textContent = state.result;
}

divid.addEventListener("click", () => {
  state.operator = "/";
  if (!state.secondNumber) {
    const divid = Number(state.firstNumber) / Number(state.secondNumber);
    state.firstNumber = divid;
    Presult.textContent = state.firstNumber + " / ";
    result.textContent = state.firstNumber;
  } else {
    const divid = Number(state.firstNumber) / Number(state.secondNumber);
    state.firstNumber = divid;
    Presult.textContent = state.firstNumber + " / ";
    state.secondNumber = result.textContent;
    state.secondNumber = "";
    result.textContent = divid;
  }
});

tavan.addEventListener("click", () => {
  state.operator = "t2";
  Presult.textContent = "sqr(" + state.firstNumber + ")";
  const t2 = Number(state.firstNumber) * Number(state.firstNumber);
  state.firstNumber = t2;
  result.textContent = state.firstNumber;
});

radic.addEventListener("click", () => {
  state.operator = "rad";
  Presult.textContent = "rad" + state.firstNumber;
  const rad = Math.sqrt(Number(state.firstNumber));
  state.firstNumber = rad;
  result.textContent = state.firstNumber;
});

function radfunction() {
  Presult.textContent = "rad" + state.firstNumber;
  const rad = Math.sqrt(Number(state.firstNumber));
  state.firstNumber = rad;
  result.textContent = state.firstNumber;
}

per.addEventListener("click", () => {
  if (state.firstNumber && !state.secondNumber) {
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
      state.secondNumber = result.textContent;
      const perx =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = perx;
      Presult.textContent = state.firstNumber + " X " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "X";
      break;
    case "/":
      state.secondNumber = result.textContent;
      const pert =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = pert;
      Presult.textContent = state.firstNumber + " / " + state.secondNumber;
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
  if (!result.textContent.includes(".") && !state.firstNumber.includes(".")) {
    result.textContent = result.textContent + ".";
    state.firstNumber = result.textContent;
    shownum();
  } else if (!result.textContent.includes(".") && state.firstNumber) {
    result.textContent = result.textContent + ".";
    state.secondNumber = result.textContent;
    shownum();
  } else if (state.firstNumber && result.textContent) {
    result.textContent = "0.";
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
const memorylist = document.querySelector(".memory-show-item");
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
      this.removeChild(e.target);
      historyItems.pop({ ope: e.target, res: e.target, id: e.target });
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

() => {
  if (historylist.style.display !== "none") {
    showhistory();
  }
};
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

const restoreMemory = () => {
  result.textContent = memoryRestoreValue;
  state.firstNumber = memoryRestoreValue;
  callShowMemory();
};

let memoryRestoreValue;
let calculationMemory = [];
let countMemoryId = 0;

const showMemory = () => {
  memoryListItems.innerHTML = "";
  memoryListItems.style.width = "97%";
  if (calculationMemory.length > 0) {
    for (let memoryItems of calculationMemory) {
      const { memoryItem, Id } = memoryItems;
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
      listMemory.id = Id;
      listMemory.classList.add("historyitem");
      listMemory.innerHTML = `${memoryItem}`;
      listMemory.addEventListener("click", function (e) {
        e.target.appendChild(container);
      });
      memoryListItems.style.flexDirection = "column";
      memoryListItems.style.justifyContent = "flex-end";
      memoryListItems.style.alignItems = "flex-end";
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
  memoryrestorebtn.addEventListener("mouseover", () => {
    memoryrestorebtn.style.backgroundColor = "#d1d1d1";
  });
  memoryrestorebtn.addEventListener("mouseout", () => {
    memoryrestorebtn.style.backgroundColor = "#e6e6e6";
  });
  clearMemoryBtn.classList.remove("same");
  clearMemoryBtn.style.cursor = "pointer";
  clearMemoryBtn.addEventListener("mouseover", () => {
    clearMemoryBtn.style.backgroundColor = "#d1d1d1";
  });
  clearMemoryBtn.addEventListener("mouseout", () => {
    clearMemoryBtn.style.backgroundColor = "#e6e6e6";
  });
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
  memoryRestoreValue =
    calculationMemory[calculationMemory.length - 1].memoryItem;
  restoreMemory();
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

memorybtns.addEventListener("click", (e) => {
  let memorybtnclick = e.target.classList.value;
  switch (memorybtnclick) {
    case "mbt same mc":
      memoryClear();
      break;
    case "mbt same mr":
      memoryRestore();
      break;
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
    case "mbt mfsh":
      break;
  }
});

mplusBtn.addEventListener("click", memoryPlus);
