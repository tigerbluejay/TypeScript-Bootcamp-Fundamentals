export class CoursesService {

    private static INSTANCE: CoursesService;

    private constructor() {
        console.log(`The courses Service was initialized.`);
    }

    static instance() {
        if (!CoursesService.INSTANCE) {
            CoursesService.INSTANCE = new CoursesService();
        }
        return CoursesService.INSTANCE;
    }
}

// with this singleton class the first time we call the instance method
// and instance of this class will be created.
// Because the constructor is private and the property is private, we
// can only instantiate the class via the instance method
// And we can only create it once, hence the name singleton,
// because subsequent calls to the instance method will just return the
// already initialized instance.