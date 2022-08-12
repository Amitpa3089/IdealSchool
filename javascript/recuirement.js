var form = document.getElementById('registration')

        form.addEventListener('submit',function(e){

        e.preventDefault()

            var AreaOfSpecialization = document.getElementById('AreaOfSpecialization').value
            var FirstName = document.getElementById('FirstName').value
            var LastName = document.getElementById('LastName').value
            var LocalAddress = document.getElementById('LocalAddress').value
            var PermanentAddress = document.getElementById('PermanentAddress').value
            var DOB = document.getElementById('DOB').value
            
            var LandlinePhone = document.getElementById('LandlinePhone').value
            var CellNo = document.getElementById('CellNo').value
            var Email = document.getElementById('Email').value
            
            var Experience = document.getElementById('Experience').value
            var Hobby = document.getElementById('Hobby').value
            var Salary = document.getElementById('Salary').value

            var obj = {
                "areaOfSpecialization": AreaOfSpecialization,
                "firstName": FirstName,
                "lastName": LastName,
                "localAddress": LocalAddress,
                "permanentAddress": PermanentAddress,
                "dob": DOB,
                "landlinePhone": LandlinePhone,
                "cellNo": CellNo,
                "email": Email,
                "experience": Experience,
                "hobby": Hobby,
                "salary": Salary
            }
        fetch("http://localhost:3000/postss",{
        method: 'POST',
        body: JSON.stringify(obj),
                headers:{
                "Content-type":"application/json; charset=UTF-8"
        }
        })
            .then(function(response){
            return responce.json()
            console.log(data)
        })
            .then(function(data){
            console.log(data)

        })
        alert("!!Congratulation!! your appliction has been subitted succesfully")
        })
