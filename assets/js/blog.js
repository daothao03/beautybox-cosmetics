const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-items");
const panes = $$(".magazine");
const imgs = $$(".img-items");

const tabActive = $(".tab-items.actions");

tabs.forEach((tab, index) => {
    const pane = panes[index];
    const img = imgs[index];

    tab.onclick = function () {
        $(".tab-items.actions").classList.remove("actions");
        $(".magazine.actions").classList.remove("actions");
        $(".img-items.actions").classList.remove("actions");

        this.classList.add("actions");
        pane.classList.add("actions");
        img.classList.add("actions");
    };
});
