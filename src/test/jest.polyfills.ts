// @ts-ignore
import {TextDecoder, TextEncoder} from 'util'

// @ts-expect-error
global.TextEncoder = global.TextEncoder ?? TextEncoder
// @ts-expect-error
global.TextDecoder = global.TextDecoder ?? TextDecoder
