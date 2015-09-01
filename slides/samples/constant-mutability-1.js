function constantMutabilityDemo1 () {
    const MY_BOOK_CONST = {
        title: "My Book",
        author: "John Smith"
    };

    debugger;

    console.log(MY_BOOK_CONST.title);

    MY_BOOK_CONST.title = "New Title";

    console.log(MY_BOOK_CONST.title);

    // This would error
    //MY_BOOK_CONST = {
    //    title: "Third Title",
    //    author: "John Smith"
    //};
}