class Government {
    private static instance: Government;

    private constructor() { }

    public static getInstance(): Government {
        if (!Government.instance) {
            Government.instance = new Government();
        }

        return Government.instance;
    }

    public doSomethingWithCountry() {
        console.log('We did some changes in our country life...');
    }
}

function country() {
    const government = Government.getInstance();
    const shadowGovernment = Government.getInstance();

    if (government === shadowGovernment) {
        console.log('You can not create your own government, you can act only throw official government.');
        console.log('Are you going to make coup d\'etat?!');
    } else {
        console.log('Hell, we got another government... there\'s something wrong with our system...');
    }
}

country();