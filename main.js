function FirstRules(inputs) {
    let word;
    let check = inputs.toString().split("");
    for (let c = 0; c < check.length; c++)
        if (parseInt(check[c])== 3) word = 'fizz';

    if (!word) {
        if (inputs % 3 == 0 && inputs % 5 == 0 && inputs % 7 == 0) word = 'fizzbuzzwizz';
        else {
            if (inputs % 3 == 0 && inputs % 5 == 0) word = 'fizzbuzz';
            else {
                if (inputs % 3 == 0 && inputs % 7 == 0) word = 'fizzwizz';
                else {
                    if (inputs % 5 == 0 && inputs % 7 == 0) word = 'buzzwizz';
                    else {
                        if (inputs % 3 == 0) word = 'fizz';
                        if (inputs % 5 == 0) word = 'buzz';
                        if (inputs % 7 == 0) word = 'wizz';
                    }
                }
            }
        }
    }

    if(!word) word=inputs;

   return word;
}



