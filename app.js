document.querySelector("button").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission

            let birthDate = new Date(document.querySelectorAll(".date")[0].value);
            let todayDate = new Date(document.querySelectorAll(".date")[1].value);
            let resultElement = document.querySelector(".result");

            if (birthDate > todayDate) {
                resultElement.textContent = "Birth date cannot be in the future.";
                resultElement.style.color = "red";
                return;
            }

            let ageYears = todayDate.getFullYear() - birthDate.getFullYear();
            let ageMonths = todayDate.getMonth() - birthDate.getMonth();
            let ageDays = todayDate.getDate() - birthDate.getDate();

            if (ageDays < 0) {
                ageMonths--;
                let lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
                ageDays += lastMonth.getDate();
            }

            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }

            resultElement.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
        });
