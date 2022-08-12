function myfunction(){
     fetch("http://localhost:3000/postss")
          .then(function(response){
              return response.json();
          })
          .then(function(recuirement){
            let placeholder = document.querySelector("#appliedCandidates");
            let out = "";
            console.log(recuirement)
            for(let candidate of recuirement) {
                   out += `
                    <tr>
                        <td>${candidate.areaOfSpecialization}</td>
                        <td>${candidate.firstName}</td>
                        <td>${candidate.lastName}</td>
                        <td>${candidate.localAddress}</td>
                        <td>${candidate.permanentAddress}</td>
                        <td>${candidate.dob}</td>
                        <td>${candidate.landlinePhone}</td>
                        <td>${candidate.cellNo}</td>
                        <td>${candidate.email}</td>
                        <td>${candidate.experience}</td>
                        <td>${candidate.hobby}</td>
                        <td>${candidate.salary}</td>
                    </tr>
                `;
            }
                   placeholder.innerHTML = out;
          })
}