function levels() {
    switch (sceneNum) {
        case 0:
            openingscreen_level();
            break;
        case 1:
            museumentry_level();
            break;
        case 2:
            mainhall_level();
            break;
        case 3:
            food_level();
            break;
        case 4:
            dream_level();
            break;
        case 5:
            artifact_level();
            break;
    }
}
