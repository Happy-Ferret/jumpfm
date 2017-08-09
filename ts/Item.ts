import * as fs from 'fs'
import * as path from 'path'
import * as request from 'request'

export interface Item {
    sel?: boolean
    icon: string
    url: string
    name: string
    size?: number
    mtime?: number
}