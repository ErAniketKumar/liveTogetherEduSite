for (var i = 1; i < college.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${college[i].name}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${college[i].name}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = college[a].image
        document.getElementById("location1").innerHTML = college[a].location
        document.getElementById("placementRate1").innerHTML =
          college[a].placement_rate;
        document.getElementById("feeStructure1").innerHTML = `<ul>
          <li id="b1">B.Tech: ${college[a].fee_structure.btech}</li>
          <li id="b2">M.Tech: ${college[a].fee_structure.mtech}</li>
        </ul>`;
      document.getElementById("area1").innerHTML = college[a].area
      document.getElementById("nirfRanking1").innerHTML = college[a].nirf_ranking;
            document.getElementById("naacAccredited1").innerHTML =
              college[a].naac_accredited;
            document.getElementById("website1").innerHTML =
              `<a href="${college[a].website}">Visit website</a>`;

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = college[0].image
        document.getElementById("location1").innerHTML = ""
        document.getElementById("placementRate1").innerHTML = "";
        document.getElementById("feeStructure1").innerHTML = "";

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = college[a].image;
        document.getElementById("location2").innerHTML = college[a].location;
        document.getElementById("placementRate2").innerHTML =
          college[a].placement_rate;
        document.getElementById("feeStructure2").innerHTML = `<ul>
          <li id="b1">B.Tech: ${college[a].fee_structure.btech}</li>
          <li id="b2">M.Tech: ${college[a].fee_structure.mtech}</li>
        </ul>`;
        document.getElementById("area2").innerHTML = college[a].area;
        document.getElementById("nirfRanking2").innerHTML =
          college[a].nirf_ranking;
        document.getElementById("naacAccredited2").innerHTML =
          college[a].naac_accredited;
        document.getElementById(
          "website2"
        ).innerHTML = `<a href="${college[a].website}">Visit website</a>`;
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = college[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }
}