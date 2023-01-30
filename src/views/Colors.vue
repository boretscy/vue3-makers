<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-6">
                <div class="row mb-5">
                    <div class="col">
                        <button 
                            v-for="(s, i) in sets"
                            :key="i"
                            type="button" 
                            class="btn btn-sm btn-secondary me-1" 
                            :class="{'btn-success': s}"
                            @click.prevent="toggleSet(i)"
                            >{{i}}</button>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-4">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Префикс</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="prefix.key">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Разделитель</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="prefix.val">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Задержка</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="prefix.trans">
                        </div>
                    </div>
                </div>
                <div 
                    class="row mb-3"
                    v-for="(v, indx) in vars"
                    :key="indx">
                    <div class="col-5">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Имя переменной</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.key">
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Цвет (#hex)</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.val">
                        </div>
                    </div>
                    <div class="col text-end pt-4">
                        <div class="form-group mt-2">
                            <button type="button" class="btn btn-sm border me-1" :style="{'background-color': '#'+v.val}">&nbsp;&nbsp;</button>
                            <button type="button" class="btn btn-sm btn-secondary me-1" @click.prevent="removeVar(indx)">-</button>
                        </div>
                    </div>
                </div>
                <div class="row"><div class="col"><button type="button" class="btn btn-sm btn-primary" @click.prevent="addVar">+</button></div></div>
            </div>
            <div class="col-6 text-minus p-3" style="background-color: #dedede;">
                <div>:root {</div>
                <div class="ps-4" v-for="(v,i) in vars" :key="i">--{{prefix.key}}{{prefix.val}}{{v.key}}: #{{v.val}};</div>
                <div>}</div>
                <br />
                <div v-if="sets.c">
                    <div>/* color */</div>
                    <div v-for="(v,i) in vars" :key="i">.c-{{prefix.key}}{{prefix.val}}{{v.key}} {color: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) !important;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.ch">
                    <div>/* :hover color */</div>
                    <div v-for="(v,i) in vars" :key="i">.c-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {color: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) !important;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.ca">
                    <div>/* :active color */</div>
                    <div v-for="(v,i) in vars" :key="i">.c-a-{{prefix.key}}{{prefix.val}}{{v.key}}:active {color: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) !important;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bg">
                    <div>/* background-color */</div>
                    <div v-for="(v,i) in vars" :key="i">.bg-{{prefix.key}}{{prefix.val}}{{v.key}} {background-color: var(--{{prefix.key}}{{prefix.val}}{{v.key}});{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bgh">
                    <div>/* :hover background-color */</div>
                    <div v-for="(v,i) in vars" :key="i">.bg-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {background-color: var(--{{prefix.key}}{{prefix.val}}{{v.key}});{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bgh">
                    <div>/* :active background-color */</div>
                    <div v-for="(v,i) in vars" :key="i">.bg-a-{{prefix.key}}{{prefix.val}}{{v.key}}:active {background-color: var(--{{prefix.key}}{{prefix.val}}{{v.key}});{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.b">
                    <div>/* border */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-{{prefix.key}}{{prefix.val}}{{v.key}} {border: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bh">
                    <div>/* :hover border */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {border: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bt">
                    <div>/* border-top */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-t-{{prefix.key}}{{prefix.val}}{{v.key}} {border-top: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.br">
                    <div>/* border-right */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-r-{{prefix.key}}{{prefix.val}}{{v.key}} {border-right: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bb">
                    <div>/* border-bottom */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-b-{{prefix.key}}{{prefix.val}}{{v.key}} {border-bottom: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bl">
                    <div>/* border-left */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-l-{{prefix.key}}{{prefix.val}}{{v.key}} {border-left: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bth">
                    <div>/* :hover border-top */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-t-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {border-top: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.brh">
                    <div>/* :hover border-right */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-r-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {border-right: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.bbh">
                    <div>/* :hover border-bottom */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-b-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {border-bottom: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.blh">
                    <div>/* :hover border-left */</div>
                    <div v-for="(v,i) in vars" :key="i">.b-l-h-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {border-left: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 1px solid;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Colors',
    data() {
        return {
            sets: {
                c: true,
                ch: true,
                ca: true,
                bg: true,
                bgh: true,
                bga: true,
                b: true,
                bh: true,
                bt: true,
                br: true,
                bb: true,
                bl: true,
                bth: true,
                brh: true,
                bbh: true,
                blh: true
            },
            prefix: {
                key: 'ya',
                val: '',
                trans: '.2s'
            },
            vars: [
                {key: 'white', val: 'fff'},
                {key: 'black', val: '000'}
            ]
        }
    },
    methods: {
        addVar() {
            this.vars.push({key: '', val: ''})
        },
        removeVar(indx) {
            this.vars.splice(indx, 1)
        },
        toggleSet(indx) {
            this.sets[indx] = !this.sets[indx]
        }
    }
}
</script>