var calendarTime = [
	"07:10-08:00",
	"08:00-08:50",
	"08:50-09:40",
	"Intervalo",
	"10:00 - 10:50",
	"10:50 - 11:40",
	"10:40 - 11:30",
	"",
	"11:10-08:00",
	"12:00-08:50",
	"01:50-09:40",
	"Intervalo",
	"02:00 - 10:50",
	"03:50 - 11:40",
	"04:40 - 11:30",
];
var calendarDays = ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab.", "Dom."];

function populateSelect() {
	// THE JSON ARRAY.
	var Categoria = [
		{
			categoria: "Feriado",
		},
		{
			categoria: "Fim DO Ano Letivo",
		},
		{
			categoria: "Férias escolares",
		},
		{
			categoria: "Recesso",
		},
		{
			categoria: "Recuperação",
		},
	];
	var ele = document.getElementById("sel");
	let dropdo = "";

	for (var i = 0; i < Categoria.length; i++) {
		dropdo +=
			'<option value="' +
			Categoria[i]["categoria"] +
			'">' +
			Categoria[i]["categoria"] +
			"</option>";
	}
	ele.innerHTML = dropdo;
	// ele.innerHTML = ele.innerHTML +
	// '<option value="">' + Categoria[i]['categoria'] + '</option>'; // }
}
populateSelect();

function populateSelt() {
	// THE JSON ARRAY.
	var Curso = [
		{
			curso: "INFANTIL",
		},
		{
			curso: "FUNDAMENTAL I",
		},
		{
			curso: "FUNDAMENTAL II",
		},
		{
			curso: "MÉDIO",
		},
	];

	var cusorelement = document.getElementById("sel-2");

	var val1 = document.getElementById("checkelement");
	let dropdocursar = "";

	for (var i = 0; i < Curso.length; i++) {
		dropdocursar +=
			'<option value="' +
			Curso[i]["curso"] +
			'">' +
			Curso[i]["curso"] +
			"</option>";
	}

	// console.log(val1)
	cusorelement.innerHTML = dropdocursar;

	// ele.innerHTML = ele.innerHTML +
	// '<option value="">' + Categoria[i]['categoria'] + '</option>'; // }
}
populateSelt();
function populatevalue(cursoelement) {
	let fundamental = [
		{
			fundamental: "EFI - 1º ANO",
		},
		{
			fundamental: "EFI - 2º ANO",
		},
		{
			fundamental: "EFI - 3º ANO",
		},
		{
			fundamental: "EFI - 4º ANO",
		},
		{
			fundamental: "EFI - 6º ANO",
		},
	];
	let INFANTIL = [
		{
			Infantil: "INTEGRAL INFANTIL",
		},
		{
			Infantil: "INTEGRAL FUNDAMENTAL I",
		},
		{
			Infantil: "BERÇÁRIO",
		},
	];
	let FUNDAMENTALII = [
		{
			fundamental11: "EFII - 6º ANO",
		},
		{
			fundamental11: "EFII - 7º ANO",
		},
		{
			fundamental11: "EFII - 8º ANO",
		},
		{
			fundamental11: "EFII - 9º ANO",
		},
	];
	let MÉDIO = [
		{
			Medio: "EM - 1ª SÉRIE",
		},
		{
			Medio: "EM - 2ª SÉRIE",
		},
		{
			Medio: "EM - 3ª SÉRIE",
		},
	];
	var fundamentalelement = document.getElementById("sel-3");
	let allelement = "";

	// alert(element.value)
	if (cursoelement.value === "FUNDAMENTAL I") {
		for (var i = 0; i < fundamental.length; i++) {
			allelement +=
				'<option value="' +
				fundamental[i]["fundamental"] +
				'">' +
				fundamental[i]["fundamental"] +
				"</option>";
		}
		fundamentalelement.innerHTML = allelement;
	} else if (cursoelement.value === "INFANTIL") {
		for (var i = 0; i < INFANTIL.length; i++) {
			allelement +=
				'<option value="' +
				INFANTIL[i]["Infantil"] +
				'">' +
				INFANTIL[i]["Infantil"] +
				"</option>";
		}
		fundamentalelement.innerHTML = allelement;
	} else if (cursoelement.value === "FUNDAMENTAL II") {
		for (var i = 0; i < FUNDAMENTALII.length; i++) {
			allelement +=
				'<option value="' +
				FUNDAMENTALII[i]["fundamental11"] +
				'">' +
				FUNDAMENTALII[i]["fundamental11"] +
				"</option>";
		}
		fundamentalelement.innerHTML = allelement;
	} else if (cursoelement.value === "MÉDIO") {
		for (var i = 0; i < MÉDIO.length; i++) {
			allelement +=
				'<option value="' +
				MÉDIO[i]["Medio"] +
				'">' +
				MÉDIO[i]["Medio"] +
				"</option>";
		}
		fundamentalelement.innerHTML = allelement;
	}
}

// function populatedropdoserie() {
// // THE JSON ARRAY.
// var Serie = [
// {
// "serie": "INFANTIL"
// },
// {

// "serie": "FUNDAMENTAL I"
// },
// {

// "serie": "FUNDAMENTAL II"
// },
// {

// "serie": "MÉDIO"
// },
// ];

// let dropdoserie = "";
// let fundamental = "";
// for (var i = 0; i < Serie.length; i++) {
// dropdoserie += '<option value="' + Serie[i]['serie'] + '">' + Serie[i]['serie'] + '</option>';
// }

// serieelement.innerHTML = dropdoserie;
// // ele.innerHTML = ele.innerHTML +
// // '<option value="">' + Categoria[i]['categoria'] + '</option>'; // }
// }
// populatedropdoserie();
function populatedropTurma() {
	// THE JSON ARRAY.
	var Truma = [
		{
			truma: "A",
		},
		{
			truma: "B",
		},
		{
			truma: "C",
		},
	];
	var Trumaelement = document.getElementById("sel-4");
	let Trumaserie = "";

	for (var i = 0; i < Truma.length; i++) {
		Trumaserie +=
			'<option value="' +
			Truma[i]["truma"] +
			'">' +
			Truma[i]["truma"] +
			"</option>";
	}
	Trumaelement.innerHTML = Trumaserie;
	// ele.innerHTML = ele.innerHTML +
	// '<option value="">' + Categoria[i]['categoria'] + '</option>'; // }
}
populatedropTurma();
function populatedropDisplia() {
	// THE JSON ARRAY.
	var Disciplinaelement = [
		{
			disciplina: "Arte Musical e Cênica ",
		},
		{
			disciplina: "Arte Plástica",
		},
		{
			disciplina: "Ciências",
		},
		{
			disciplina: "Educação Digital",
		},
		{
			disciplina: "Educação Física",
		},
		{
			disciplina: "Ensino Religioso",
		},
		{
			disciplina: "Geografia",
		},
		{
			disciplina: "História",
		},
		{
			disciplina: "Inglês",
		},
		{
			disciplina: "Língua Portuguesa",
		},
		{
			disciplina: "Matemática",
		},
	];
	var disciplinaelement = document.getElementById("sel-5");
	let disciplina = "";

	for (var i = 0; i < Disciplinaelement.length; i++) {
		disciplina +=
			'<option value="' +
			Disciplinaelement[i]["disciplina"] +
			'">' +
			Disciplinaelement[i]["disciplina"] +
			"</option>";
	}
	disciplinaelement.innerHTML = disciplina;
	// ele.innerHTML = ele.innerHTML +
	// '<option value="">' + Categoria[i]['categoria'] + '</option>'; // }
}
populatedropDisplia();
jscolor.presets.default = {
	position: "right",
	palette: [
		"#000000",
		"#7d7d7d",
		"#870014",
		"#ec1c23",
		"#ff7e26",
		"#fef100",
		"#22b14b",
		"#00a1e7",
		"#3f47cc",
		"#a349a4",
		"#ffffff",
		"#c3c3c3",
		"#b87957",
		"#feaec9",
		"#ffc80d",
		"#eee3af",
		"#b5e61d",
		"#99d9ea",
		"#7092be",
		"#c8bfe7",
	],
	//paletteCols: 12,
	//hideOnPaletteClick: true,
};

// Date current day////////
let dates = [];

var d = new Date();

var date = d.getDate() - 1;
var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
var year = d.getFullYear();
console.log(date);

console.log(dateStr);
// document.getElementById("firstday").innerHTML = dateStr;
let x = 1;
if (x == 1) {
	x = 2;
	for (let i = 0; i < 7; i++) {
		date = date + 1;

		var dateStr = month + "/" + date + "/" + year;

		dates.push(dateStr);
		console.log(date);
	}
}

for (let i = 1; i <= 7; i++) {
	document.getElementById(`w-${i}`).innerHTML = dates[i - 1];
}
function handleChangeWeek() {
	// console.log(dates.length - 1)
	let lastIndex = dates.length - 1;
	let lastDate = new Date(dates[lastIndex]);
	dates = [];
	// console.log(lastDate);

	for (let i = 1; i <= 7; i++) {
		let newDay = new Date(lastDate);
		newDay.setDate(newDay.getDate() + i);
		// console.log(newDay)
		var date = newDay.getDate();
		var month = newDay.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
		var year = newDay.getFullYear();
		var nextDateStr = month + "/" + date + "/" + year;
		// dates[i-1] = nextDateStr;
		dates.push(nextDateStr);
	}
	console.log(dates);
	for (let i = 1; i <= 7; i++) {
		document.getElementById(`w-${i}`).innerHTML = dates[i - 1];
	}
}

// console.log(dates, "dates")
function previousbutton() {
	console.log(dates[0]);
	let firstIndex = dates[0];
	let firstDate = new Date(firstIndex);
	console.log(firstDate, "firstDate");

	dates = [];
	// console.log(lastDate);

	for (let i = 7; i >= 1; i--) {
		let newDay = new Date(firstDate);
		newDay.setDate(newDay.getDate() - i);
		// console.log(newDay)
		var date = newDay.getDate();
		var month = newDay.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
		var year = newDay.getFullYear();
		var nextDateStr = month + "/" + date + "/" + year;
		console.log(nextDateStr);
		// dates[i-1] = nextDateStr;
		dates.push(nextDateStr);
	}
	console.log(dates);
	for (let i = 1; i <= 7; i++) {
		document.getElementById(`w-${i}`).innerHTML = dates[i - 1];
	}
}
// let databaseData = localStorage.getItem('data');
// console.log(databaseData,"databaseData")

// let tabBody = document.getElementById("calendarDynamicRows");
// let html = "";
// for (let i = 0; i <= 7; i++) {
// 	html += `

//     <td>07:10 - 08:00</td>

//     `;
// }
// tabBody.classList.add("text-center table-Text-color-portal");
// tabBody.innerHTML = html;
// console.log("------------");

//     < tr >

//     <td class="text-center table-Text-color-portal">07:10 - 08:00</td>
//     <td id="r-1" onclick="handleTableData(this)"></td>
//     <td onclick="handleTableData(this)" id="r-2"></td>
//     <td onclick="handleTableData(this)" id="r-3"></td>
//     <td onclick="handleTableData(this)" id="r-4"></td>
//     <td onclick="handleTableData(this)" id="r-5"></td>
//     <td onclick="handleTableData(this)" id="r-6"></td>
//     <td onclick="handleTableData(this)" id="r-7"></td>
// </tr >

let rowsLength = calendarTime.length;
for (let i = 0; i < rowsLength; i++) {
	let rowData = "";
	let tr = document.createElement("tr");
	if (i == 0 || i == 8) {
		rowData += ` <th rowspan="7" class="bg-white Width-eighty-Portal pt-5">
        <p class="vertical-text-portal">Turno Da Manhã</p>
        </th>`;
	}
	// if(i == 7 ){
	//     rowData += `<tr colspan="12" class="bg-dropdown-Portal"></tr>`
	// }

	for (let j = 0; j <= 8; j++) {
		// if (j == 0) {
		// 	rowData = ` `;
		// }

		if (j == 1) {
			rowData += ` <td class="text-center table-Text-color-portal">${calendarTime[i]}</td>`;
		}
		//      if(i == 7 ){
		//     rowData += `<tr colspan="14" class="bg-dropdown-Portal" style="background-color:red"></tr>`
		// }
		else if (j != 0 && j != 1) {
            if(i==3 || i == 11){
                rowData = ` <td class="text-center table-Text-color-portal">${calendarTime[i]}</td><td style='background-color:#1a5a82' colspan='8'></td>`;
            }
            else{
                rowData += `<td onclick="handleTableData(this)" date='${
				dates[j - 2]
			}' time='${calendarTime[i]}' day='${calendarDays[j - 2]}' id="r-${
				i + "" + j
			}"></td>`;
            }
			
		} else {
		}
	}
	console.log("---------------------");
	tr.innerHTML = rowData;
	// tr2.innerHTML = null;
	console.log(tr);
	// console.log | i;
	if (i == 7) {
        let tr2 = document.createElement('tr')
        tr2.innerHTML=`<td colspan='10' style='background-color:#1a5a82'></td>`
        
        // tr2.getAttribute('colspan')='10'
		// tr2 = tr2.setAttribute("colspan", "10");
        console.log(tr2)
		document.getElementById("dynamicTbody").append(tr2);
	} else {
		document.getElementById("dynamicTbody").append(tr);
	}
	// document.getElementById("dynamicTbody2").append(tr2);
	console.log("---------------------");
}

let timeTable = []
function handleTableData(tag) {
	let locData = localStorage.getItem("data");
	let d1 = JSON.parse(locData);
	console.log(d1);
	let html = "";
	if (tag.innerHTML != "") {
		tag.innerHTML = "";
		tag.style.backgroundColor = "";
	} else {
		html += `${d1.disciplina}`;
		tag.innerHTML = html;
		tag.style.backgroundColor = `${d1.color}`;
		let timeTableObj = {'date': tag.getAttribute('date'), 'time' : tag.getAttribute('time'), 'day': tag.getAttribute('day')}
		// console.log(timeTableObj);
		timeTable.push(timeTableObj)   
		d1.push( 'timetable' ,timeTable)
		console.log(d1);
	}

	console.log(tag);
	console.log(
		tag.getAttribute("date"),
		tag.getAttribute("day"),
		tag.getAttribute("time")
	);
}
