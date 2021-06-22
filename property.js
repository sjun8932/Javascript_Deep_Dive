const person = {
    // 데이터 프로퍼티
    firstName: 'Sangjun',
    lastName: 'Park',
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

   
};


console.log(Object.getOwnPropertyDescriptors(person));