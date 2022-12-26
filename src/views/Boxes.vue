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

                <div class="row"><div class="col"><h6>Радиус</h6></div></div>
                <div 
                    class="row mb-3"
                    v-for="(v, indx) in vars.radius"
                    :key="indx">
                    <div class="col">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Имя переменной</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.key">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Значение (px)</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.val">
                        </div>
                    </div>
                    <div class="col-1 text-end pt-4">
                        <div class="form-group mt-2">
                            <button type="button" class="btn btn-sm btn-secondary me-1" @click.prevent="removeVar('radius', indx)">-</button>
                        </div>
                    </div>
                </div>
                <div class="row"><div class="col"><button type="button" class="btn btn-sm btn-primary" @click.prevent="addVar('radius')">+</button></div></div>

                 <div class="row my-3"><div class="col"></div></div>

                <div class="row"><div class="col"><h6>Тень</h6></div></div>
                <div 
                    class="row mb-3"
                    v-for="(v, indx) in vars.shadow"
                    :key="indx">
                    <div class="col">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Имя переменной</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.key">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label class="form-label text-muted"><small>Значение (px)</small></label>
                            <input type="text" class="form-control form-control-sm" v-model="v.val">
                        </div>
                    </div>
                    <div class="col-1 text-end pt-4">
                        <div class="form-group mt-2">
                            <button type="button" class="btn btn-sm btn-secondary me-1" @click.prevent="removeVar('shadow', indx)">-</button>
                        </div>
                    </div>
                </div>
                <div class="row"><div class="col"><button type="button" class="btn btn-sm btn-primary" @click.prevent="addVar('shadow')">+</button></div></div>

            </div>
            <div class="col-6 text-minus p-3" style="background-color: #dedede;">
                <div>:root {</div>
                <div class="ps-4" v-for="(v,i) in vars.radius" :key="i">--{{prefix.key}}{{prefix.val}}{{v.key}}: {{v.val}}px;</div>
                <div class="ps-4" v-for="(v,i) in vars.shadow" :key="i">--{{prefix.key}}{{prefix.val}}{{v.key}}: {{v.val}}px;</div>
                <div>}</div>
                <br />

                <div v-if="sets.r">
                    <div>/* border-radius */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: var(--{{prefix.key}}{{prefix.val}}{{v.key}});{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>
                <div v-if="sets.rt">
                    <div>/* border-radius-top */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-t-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0 0;}</div><br />
                </div>
                <div v-if="sets.rr">
                    <div>/* border-radius-right */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-r-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}}) var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0;}</div><br />
                </div>
                <div v-if="sets.rb">
                    <div>/* border-radius-bottom */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-b-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}}) var(--{{prefix.key}}{{prefix.val}}{{v.key}});}</div><br />
                </div>
                <div v-if="sets.rl">
                    <div>/* border-radius-left */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-l-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}}) var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0;}</div><br />
                </div>
                <div v-if="sets.rtl">
                    <div>/* border-radius-top-left */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-tl-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0 0 0;}</div><br />
                </div>
                <div v-if="sets.rtr">
                    <div>/* border-radius-top-rigth */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-tr-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0 0;}</div><br />
                </div>
                <div v-if="sets.rbr">
                    <div>/* border-radius-bottom-rigth */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-br-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 0;}</div><br />
                </div>
                <div v-if="sets.rbl">
                    <div>/* border-radius-bottom-left */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-bl-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 0 0 0 var(--{{prefix.key}}{{prefix.val}}{{v.key}});}</div><br />
                </div>

                <div v-if="sets.c">
                    <div>/* border-radius-circle */</div>
                    <div v-for="(v,i) in vars.radius" :key="i">.b-radius-c-{{prefix.key}}{{prefix.val}}{{v.key}} {border-radius: 50%;{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}</div><br />
                </div>

                <div v-if="sets.s">
                    <div>/* shadow */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-{{prefix.key}}{{prefix.val}}{{v.key}} {-webkit-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>
                <div v-if="sets.st">
                    <div>/* shadow-top */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-top-{{prefix.key}}{{prefix.val}}{{v.key}} {-webkit-box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>
                <div v-if="sets.sb">
                    <div>/* shadow-bottom */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-{{prefix.key}}{{prefix.val}}{{v.key}} {-webkit-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>
                <div v-if="sets.sh">
                    <div>/* shadow-hover */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {-webkit-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>
                <div v-if="sets.sth">
                    <div>/* shadow-top-hover */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-top-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {-webkit-box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px -var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>
                <div v-if="sets.sbh">
                    <div>/* shadow-bottom-hover */</div>
                    <div v-for="(v,i) in vars.shadow" :key="i">
                        .shadow-{{prefix.key}}{{prefix.val}}{{v.key}}:hover {-webkit-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);box-shadow: 0px var(--{{prefix.key}}{{prefix.val}}{{v.key}}) 10px 0px rgba(0, 0, 0, 0.2);{{(prefix.trans.length)?'transition: '+prefix.trans+';':''}}}
                    </div><br />
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Boxes',
    data() {
        return {
            sets: {
                r: true,
                rt: false,
                rr: false,
                rb: false,
                rl: false,
                rtl: false,
                rtr: false,
                rbr: false,
                rbl: false,
                c: true,
                s: true,
                st: false,
                sb: false,
                sh: true,
                sth: false,
                sbh: false,
            },
            prefix: {
                key: 'ya',
                val: '',
                trans: '.2s'
            },
            vars: {
                radius: [
                    {key: 'radius', val: '5'}
                ],
                shadow: [
                    {key: 'shadow', val: '5'}
                ]
            }
        }
    },
    methods: {
        addVar(section) {
            this.vars[section].push({key: '', val: ''})
        },
        removeVar(section, indx) {
            this.vars[section].splice(indx, 1)
        },
        toggleSet(indx) {
            this.sets[indx] = !this.sets[indx]
        }
    }
}
</script>