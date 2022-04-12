(function () {
    const app = {
        cacheDom() {
            this.parallaxes = document.getElementsByClassName("parallax");
            this.changeImage = document.querySelector(".school");
            this.scrollRect = document.querySelector('.scrollIndicateur');
        },
        init() {
            this.cacheDom();
            this.changing();
            window.addEventListener("scroll", () => {
                this.relax();
                this.scrollBarre();
            });
        },
        relax() {
            // console.log(this.parallaxes)
            const scrolledHeight = window.scrollY;
            for (const parallax of this.parallaxes) {
                // console.log(parallax);
                // console.log(scrolledHeight);
                const limit = parallax.offsetTop + parallax.offsetHeight;
                if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
                    parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";
                } else {
                    parallax.style.backgroundPositionY = "0";
                }
            }
        },
        scrollBarre(){
            const scrolledHeight = window.scrollY;
            // let test = parseInt(this.scrollRect)
            console.log(scrolledHeight);
            // console.log(this.scrollRect.scrollTop);
            // console.log(test.style.fill);
            // if (scrolledHeight > this.scrollRect.offsetTop){
            this.scrollRect.style.marginTop = scrolledHeight  +'px';
            console.log(this.scrollRect.scrollTop);
            // }
        },
        changing() {
            const listItems = document.querySelectorAll('.school__item');
            const arrows = document.querySelectorAll(".school__arrow");
            for (const arrow of arrows) {
                for (const listItem of listItems) {
                    listItem.addEventListener('mouseover', (e) => {
                        this.changeImage.style.backgroundImage = e.currentTarget.dataset.image;
                        listItem.querySelector('.school__arrow').classList.remove('hidden');

                    });
                    listItem.addEventListener('mouseleave', (e) => {
                        this.changeImage.style.backgroundImage = e.currentTarget.dataset.image;
                        listItem.querySelector('.school__arrow').classList.add('hidden');
                    });
                }
            }
        }
    };
    app.init();
})();



