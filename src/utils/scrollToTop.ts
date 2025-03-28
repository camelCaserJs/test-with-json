export default function scrollToTop() {
    setTimeout(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}