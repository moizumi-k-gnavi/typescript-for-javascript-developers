export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    //     "Hey, guys! This is Atsushi! Are you interrested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${Me.firstName} Are you interrested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
console.log(Me.isProgramer);
console.log(Me.work());
