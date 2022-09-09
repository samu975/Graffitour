const hey = (message) => {
    if (message.endsWith('?') && message === message.toUpperCase() ) {
        return "Calm down, I know what I'm doing!"
    }
    else if (message.endsWith('?')) {
        return 'Sure'
    }
    else if (message === message.toUpperCase()) {
        return 'Whoa, chill out!'
    } else if(message === ''){
        'Fine. Be that way!'
    }
    else{
        return 'Whatever.'
    }
};

console.log(hey('\n\r \t'))

