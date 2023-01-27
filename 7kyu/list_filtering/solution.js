function filter_list(l) {
    return l.filter(i => (typeof i == 'number' && i >= 0))
}