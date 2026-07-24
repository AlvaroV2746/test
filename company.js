


const make = (name, opciones = {}) => {
    const {state ="moderating", createdAt = Date.now(), ...extra} = opciones;


    return {name, state, createdAt, ...extra}
    

};


const result = make('Códica', { website: 'codica.io', state: 'published' });

console.log(result);



