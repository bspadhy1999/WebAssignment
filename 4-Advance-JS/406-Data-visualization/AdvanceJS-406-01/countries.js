const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function showAll() {
  var AllCountryListMain = document.getElementById("AllCountryListMain");
  AllCountryListMain.innerHTML = "";
  for (let i = 0; i < countries.length; i++) {
    var countryList = countries[i];
    let divref = document.createElement("div");
    divref.className = "col-md-2 m-1 singleCountry";
    divref.innerHTML = `<p>${countryList.toUpperCase()}</p>`;
    document.getElementById("AllCountryListMain").appendChild(divref);
  }
}
showAll();
function countrySearchDescOrder() {
  let countrySearchDesc = document.getElementById("countrySearchDesc");
  var AllCountryListMain = document.getElementById("AllCountryListMain");
  if (
    countrySearchDesc.innerHTML === `<i class="fa-solid fa-arrow-up-a-z"></i>`
  ) {
    AllCountryListMain.innerHTML = "";
    countrySearchDesc.innerHTML = `<i class="fa-solid fa-arrow-down-a-z"></i>`;
    for (let i = countries.length - 1; i >= 0; i--) {
      var countryList = countries[i];
      let divref = document.createElement("div");
      divref.className = "col-md-2 m-1 singleCountry";
      divref.innerHTML = `<p>${countryList}</p>`;
      document.getElementById("AllCountryListMain").appendChild(divref);
    }
  } else {
    AllCountryListMain.innerHTML = "";
    countrySearchDesc.innerHTML = `<i class="fa-solid fa-arrow-up-a-z"></i>`;
    for (let i = 0; i < countries.length; i++) {
      var countryList = countries[i];
      let divref = document.createElement("div");
      divref.className = "col-md-2 m-1 singleCountry";
      divref.innerHTML = `<p>${countryList}</p>`;
      document.getElementById("AllCountryListMain").appendChild(divref);
    }
  }
}
document.getElementById("inputShow").style.display = "none";
let countrySearchWithStarting = () => {
  let inputCountry = document.getElementById("inputCountry");
  let inputShow = document.getElementById("inputShow");
  inputShow.style.display = "block";
  var AllCountryListMain = document.getElementById("AllCountryListMain");
  AllCountryListMain.innerHTML = "";
  var filter = inputCountry.value.toUpperCase();
  let count = 0;
  for (let i = 0; i < countries.length; i++) {
    var countryList = countries[i].toUpperCase();
    if (countryList.startsWith(filter) === true) {
      let divref = document.createElement("div");
      divref.className = "col-md-2 m-1 singleCountry";
      divref.innerHTML = `<p>${countryList}</p>`;
      AllCountryListMain.appendChild(divref);
      count++;
    }
  }
  inputShow.innerHTML = `Countries starts with <span style="color:red">${inputCountry.value.toUpperCase()}</span> are: <span style="color:red">${count}</span>`;
};
let countrySearchWithAnyKeyWord = () => {
  let inputShow = document.getElementById("inputShow");
  inputShow.style.display = "block";
  var AllCountryListMain = document.getElementById("AllCountryListMain");
  AllCountryListMain.innerHTML = "";
  let inputCountry = document.getElementById("inputCountry");
  var filter = inputCountry.value.toUpperCase();
  let count = 0;
  for (let i = 0; i < countries.length; i++) {
    var countryList = countries[i].toUpperCase();
    if (countryList.indexOf(filter) > -1) {
      let divref = document.createElement("div");
      divref.className = "col-md-2 m-1 singleCountry";
      divref.innerHTML = `<p>${countryList}</p>`;
      AllCountryListMain.appendChild(divref);
      count++;
    }
  }
  inputShow.innerHTML = `Countries containing <span style="color:red">${inputCountry.value.toUpperCase()}</span> are: <span style="color:red">${count}</span>`;
};
function fnCountrySearch(e) {
  let inputCountry = document.getElementById("inputCountry");
  if (inputCountry.value === "") {
    showAll();
    document.getElementById("inputShow").style.display = "none";
  }
}
