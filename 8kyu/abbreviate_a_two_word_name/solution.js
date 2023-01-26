function abbrevName(name){
    let initials = [];
    name.split(" ").forEach(c => initials.push(c[0].toUpperCase()));
    return initials.join('.');
  }