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

    class HeaderDrawer extends HTMLElement {
        constructor() {
            super();

            this.body = document.querySelector('body');
            this.toggle = this.querySelector('summary');

            this.toggle.addEventListener('click', this.toggleClickHandler.bind(this));
        }

        toggleClickHandler(){
            this.body.classList.toggle('no-scroll--mobile-tablet');
        }
    }

    customElements.define('header-drawer', HeaderDrawer);

    class LazyImageHTML extends HTMLElement {
        constructor() {
            super();
        
            this.image = this.querySelector('img');
            if (this.image) {
            this.handleLazy();
        
            const observer = new MutationObserver((changes) => {
                changes.forEach((change) => {
                if (change.attributeName.includes('src') || change.attributeName.includes('srcset')){
                    this.handleLazy();
                }
                });
            });
            observer.observe(this.image, {attributes : true});
            }
        }
        
        handleLazy () {
            if (!this.image.complete) {
            this.classList.add('loading');
        
            this.image.addEventListener('load', () => {
                this.classList.remove('loading');
            }, false);
            }
        }
    }
    
    customElements.define('lazy-image', LazyImageHTML); 
}