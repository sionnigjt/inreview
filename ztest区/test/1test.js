{
    console.log([] + []);
    console.log({} + []);
    console.log([] + {});
    console.log(Number([]), Number({}), Number(true));
    console.log({}.toString(), [].toString(), true.toString());
    console.log(Boolean([]), Boolean([].toString()), Boolean(Object), Boolean({}), Boolean(0));
}


