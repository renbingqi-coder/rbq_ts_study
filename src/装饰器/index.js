function classDecorator(target) {
    console.log(`classDecorator applied on: ${target}`);
}

@classDecorator
class MyClass { 

}

const d = new MyClass()