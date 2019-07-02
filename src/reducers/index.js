const initial = 0

export default function(state = initialStore, action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state + 1
        case "DECREMENTAR":
            return state - 1

            deafault:
                return state
    }
}