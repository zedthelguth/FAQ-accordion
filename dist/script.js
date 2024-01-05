
const details = document.getElementById('mydetails');
const image = document.querySelector('.plus-icon');
details.addEventListener('toggle', function(){   
   if(details.open){
   image.src = "../dist/images/icon-minus.svg";
   image.alt = 'minus-icon';
    }else{
        image.src = "../dist/images/icon-plus.svg";
        image.alt = "plus-icon"
    }
})

function toggleAllDetails() {
    const allDetails = document.querySelectorAll('details');

    allDetails.forEach(item => {
        item.addEventListener('click', function(){
            const image = this.querySelector('.plus-icon');
            let icon = 'minus';
            if (this.open) {
                icon = 'plus'; 
            }

            image.src = `../dist/images/icon-${icon}.svg`;
        })
    })
}

toggleAllDetails()


