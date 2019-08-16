function Book(title,pages,isRead=false) {
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function (){
        this.readornot = this.isRead ? "Déja lu" : "Pas encore lu";
        return `${this.title}, ${this.pages} pages, ${this.readornot}`
    }
}