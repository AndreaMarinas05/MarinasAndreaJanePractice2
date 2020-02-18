function comparePassword()
{
        let initialPass = document.getElementById("inPass").value;
        let confirmPass = document.getElementById("conPass").value;
        
        if (confirmPass === initialPass)
        {
                document.getElementById("valPassword").innerHTML = "Password are the same";
                document.getElementById("valEmail").innerHTML = "Mail is correct";
        }
        else
        {
            document.getElementById("valPassword").innerHTML = "Password are not the same";
            document.getElementById("valEmail").innerHTML = "Mail is wrong";
        }
}

