class employe {
    constructor(matricule, name, lastName, birthday, jobDate, salary) {
        this._matricule = matricule
        this._name = name
        this._lastName = lastName
        this._birthday = birthday
        this._jobDate = jobDate
        this._salary = salary
    }

    get matricule(){
        return this._matricule
    }

    set matricule(newMatricule){
        this._matricule = newMatricule
    }

    get name(){
        return this._name.charAt(0).toUpperCase() + this._name.substring(1).toLowerCase()
    }
    set name(newName){
        this._name = newName
    }

    get lastName(){
        return this._lastName
    }
    set lastName(newLastName){
        this._lastName = newLastName
    }


    get birthday(){
        return this._birthday
    }
    set birthday(newBirthday){
        this._birthday = newBirthday
    }

    get jobDate(){
        return this._jobDate
    }
    set jobDate(newJobDate){
        this._jobDate = newJobDate
    }

    get salary(){
        return this._salary
    }
    set salary(newSalary){
        this._salary = newSalary
    }
    getAge() {
        return this.diff(this.birthday);
    }

    getAnciennete() {
        return this.diff(this.jobDate);
    }

    diff(element) {
        let Y = element.split('/')[2]
        let M = element.split('/')[1] - 1
        let D = element.split('/')[0]

        var diff = Date.now() - new Date(Y, M, D).getTime();
        var age= new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    augmenterSalaireByAnciennete(){
        if(this.getAnciennete() <5) {
            return this.salary *= 1.02
        } else if (this.getAnciennete() <10 && this.getAnciennete() >=5) {
            return this.salary *= 1.05
        } else {
            return this.salary *= 1.10
        }
    }

    afficherEmployee(){
        console.log(`
            matricule : ${ this.matricule }
            nom complet : ${ this.lastName.toUpperCase()} ${this.name}
            age : ${ this.getAge()}
            anciennete : ${ this.getAnciennete()}
            salaire : ${ this.augmenterSalaireByAnciennete()}
        `)
   }
}


let amine = new employe('sfefe9f4984', 'amine', 'hadef', '22/11/1991', '22/06/2009', 1500)
amine.afficherEmployee()