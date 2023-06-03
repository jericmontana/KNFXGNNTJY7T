export function main(){
    document.addEventListener('DOMContentLoaded', () => {
        console.log('✨ DOM Content Loaded.');
    })

    class StickyHeader extends HTMLElement {
        constructor() {
            super();

            this.header = this;

            this.currentScrollTop = 0;
            this.sticky = false;

            window.addEventListener('scroll', this.onScroll.bind(this), false);
        }

        onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
    
            // Scroll Up Once
            if( scrollTop < this.currentScrollTop && !this.sticky){
                this.header.classList.add('site-header-sticky');
                this.header.classList.remove('site-header-hidden');

                console.log(this.header);

            }
    
            // Scrolling Down Once
            if( scrollTop > this.currentScrollTop && this.sticky){
                this.header.classList.add('site-header-sticky');
                this.header.classList.add('site-header-hidden');
            }
    
            // Scrolling Up
            if( scrollTop < this.currentScrollTop){
                this.sticky = true;
            }
            // Scrolling Down
            if( scrollTop > this.currentScrollTop){
                this.sticky = false;
            }
    
            this.currentScrollTop =  scrollTop;
    
        }
    }

    customElements.define('sticky-header', StickyHeader);
}