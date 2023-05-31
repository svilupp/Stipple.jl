var documenterSearchIndex = {"docs":
[{"location":"API/layout.html","page":"Layout","title":"Layout","text":"CurrentModule = Layout","category":"page"},{"location":"API/layout.html","page":"Layout","title":"Layout","text":"layout\npage\nrow\ncell\ntheme","category":"page"},{"location":"API/layout.html#Stipple.Layout.layout","page":"Layout","title":"Stipple.Layout.layout","text":"function layout(output::Union{String,Vector}; partial::Bool = false, title::String = \"\", class::String = \"\", style::String = \"\",\n                  head_content::String = \"\", channel::String = Genie.config.webchannels_default_route) :: String\n\nUtility for creating a basic web page structure, including doctype as well as <HTML>, <HEAD>, <TITLE>, <META viewport>,   and <BODY> tags, together with the output content.\n\nIf partial is true, the page layout HTML elements are not returned.\n\nExamples\n\njulia> layout([\n        span(\"Hello\", @text(:greeting))\n        ])\n\"<!DOCTYPE html>\n<html><head><title></title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui\" /></head><body class style><link href=\"https://fonts.googleapis.com/css?family=Material+Icons\" rel=\"stylesheet\" /><link href=\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\" /><link href=\"/css/stipple/stipplecore.css\" rel=\"stylesheet\" /><link href=\"/css/stipple/quasar.min.css\" rel=\"stylesheet\" /><span v-text='greeting'>Hello</span><script src=\"/js/channels.js?v=1.17.1\"></script><script src=\"/js/underscore-min.js\"></script><script src=\"/js/vue.js\"></script><script src=\"/js/quasar.umd.min.js\"></script>\n<script src=\"/js/apexcharts.min.js\"></script><script src=\"/js/vue-apexcharts.min.js\"></script><script src=\"/js/stipplecore.js\" defer></script><script src=\"/js/vue_filters.js\" defer></script></body></html>\"\n\njulia> layout([\n        span(\"Hello\", @text(:greeting))\n        ], partial = true)\n\"<link href=\"https://fonts.googleapis.com/css?family=Material+Icons\" rel=\"stylesheet\" /><link href=\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\" /><link href=\"/css/stipple/stipplecore.css\" rel=\"stylesheet\" /><link href=\"/css/stipple/quasar.min.css\" rel=\"stylesheet\" /><span v-text='greeting'>Hello</span><script src=\"/js/channels.js?v=1.17.1\"></script><script src=\"/js/underscore-min.js\"></script><script src=\"/js/vue.js\"></script><script src=\"/js/quasar.umd.min.js\"></script>\n<script src=\"/js/apexcharts.min.js\"></script><script src=\"/js/vue-apexcharts.min.js\"></script><script src=\"/js/stipplecore.js\" defer></script><script src=\"/js/vue_filters.js\" defer></script>\"\n\n\n\n\n\n","category":"function"},{"location":"API/layout.html#Stipple.Layout.page","page":"Layout","title":"Stipple.Layout.page","text":"function page(elemid, args...; partial::Bool = false, title::String = \"\", class::String = \"\", style::String = \"\",\n                channel::String = Genie.config.webchannels_default_route , head_content::String = \"\", kwargs...)\n\nGenerates the HTML code corresponding to an SPA (a single page application), defining the root element of the Vue app.\n\nExample\n\njulia> page(:elemid, [\n        span(\"Hello\", @text(:greeting))\n        ])\n\"<!DOCTYPE html>\n<html><head><title></title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui\" /></head><body class style><link href=\"https://fonts.googleapis.com/css?family=Material+Icons\" rel=\"stylesheet\" /><link href=\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\" /><link href=\"/css/stipple/stipplecore.css\" rel=\"stylesheet\" /><link href=\"/css/stipple/quasar.min.css\" rel=\"stylesheet\" /><div id=elemid><span v-text='greeting'>Hello</span></div><script src=\"/js/channels.js?v=1.17.1\"></script><script src=\"/js/underscore-min.js\"></script><script src=\"/js/vue.js\"></script><script src=\"/js/quasar.umd.min.js\"></script>\n<script src=\"/js/apexcharts.min.js\"></script><script src=\"/js/vue-apexcharts.min.js\"></script><script src=\"/js/stipplecore.js\" defer></script><script src=\"/js/vue_filters.js\" defer></script></body></html>\"\n\n\n\n\n\n","category":"function"},{"location":"API/layout.html#Stipple.Layout.row","page":"Layout","title":"Stipple.Layout.row","text":"function row(args...; kwargs...)\n\nCreates a div HTML element with a CSS class named row. This works with Stipple's core layout and with Quasar's Flex Grid to create the responsive CSS grid of the web page. The row() function creates rows which should include cells.\n\nExample\n\njulia> row(span(\"Hello\"))\n\"<div class=\"row\"><span>Hello</span></div>\"\n\n\n\n\n\n","category":"function"},{"location":"API/layout.html#Stipple.Layout.cell","page":"Layout","title":"Stipple.Layout.cell","text":"function cell(args...; size::Int=0, xs::Int=0, sm::Int=0, md::Int=0, lg::Int=0, xl::Int=0, kwargs...)\n\nCreates a div HTML element with Quasar flex grid CSS class named col. If size is specified, the class col-$size is added instead. Quasar's Flex Grid supports the following values for size arguments:\n\nInteger values between 0 and 12; 0 means no specification\nAbStractString values \"1\" - \"12\", \"\" or \"auto\"; \"\" means no specification, \"auto\" means height/width from content\n\nIf tag classes (xs, sm, md, lg, xl) are specified, the respective classes col-$tag-$md are added, e.g. col-sm-6. The cells should be included within rows or columns.\n\nMoreover, cells are of the class st-col, which is controlled by the Stipple theme.\n\nExample\n\njulia> row(cell(size = 2, md = 6, sm = 12, span(\"Hello\")))\n\"<div class=\"row\"><div class=\"st-col col-2 col-sm-12 col-md-6\"><span>Hello</span></div></div>\"\n\n\n\n\n\n","category":"function"},{"location":"API/layout.html#Stipple.Layout.theme","page":"Layout","title":"Stipple.Layout.theme","text":"function theme() :: String\n\nProvides theming support for Stipple apps and pages. It includes Stipple's default CSS files and additional elements,   in the form of HTML tags, can be injected by pushing to the Stipple.Layout.THEMES collection.\n\nExample\n\njulia> theme()\n\"<link href=\"https://fonts.googleapis.com/css?family=Material+Icons\" rel=\"stylesheet\" /><link href=\"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap\" rel=\"stylesheet\" /><link href=\"/css/stipple/stipplecore.css\" rel=\"stylesheet\" />\"\n\njulia> StippleUI.theme()\n\"<link href=\"/css/stipple/quasar.min.css\" rel=\"stylesheet\" />\"\n\njulia> push!(Stipple.Layout.THEMES, StippleUI.theme)\n\n\n\n\n\n","category":"function"},{"location":"API/typography.html","page":"Typography","title":"Typography","text":"CurrentModule = Typography","category":"page"},{"location":"API/typography.html","page":"Typography","title":"Typography","text":"header","category":"page"},{"location":"API/typography.html#Stipple.Typography.header","page":"Typography","title":"Stipple.Typography.header","text":"function header(args...; size::Int = 1, kwargs...)\n\nGenerates code for HTML headers (H1 to H6) based on size which include styling for Twitter Bootstrap, the CSS   framework used by Stipple.\n\nExample\n\njulia> Typography.header(\"Hello\", size = 2)\n\"<h2 class=\"text-h2\">Hello</h2>\"\n\n\n\n\n\n","category":"function"},{"location":"guides/Stipple_LifeCycle.html#life-cycle-and-the-various-events-of-a-Stipple-app","page":"Stipple LifeCycle","title":"life-cycle and the various events of a Stipple app","text":"","category":"section"},{"location":"guides/Stipple_LifeCycle.html#.-Sync-request-–-server-side-response","page":"Stipple LifeCycle","title":"1. Sync request – server side response","text":"","category":"section"},{"location":"guides/Stipple_LifeCycle.html","page":"Stipple LifeCycle","title":"Stipple LifeCycle","text":"browser makes request to a URL\nthe request is handled by the corresponding route and the route handler is executed\nthe initial response/payload is prepared, meaning composing the HTML page and injecting all the JS scripts/files\nhere we create a new instance of the model, we attach the handlers, and we call Stipple.init(ModelType) (because effectively the result of Stipple.init is a JS file that contains the JS/Vue.js version of our model)\nat this stage the developer can customise the HTML response by adding all sorts of conditional logic as needed\nthe JS/Vue.js version of the model generated by Stipple.init is based on the Julia model type and not on an instance because the JS assets are designed to be cached and served from a CDN, so we do not want the JS/Vue.js model file to be customised – it will always reflect the default state of the Julia model and it's the same for all the users.\nwhen all these steps are done, the resulting HTML response is sent to the browser","category":"page"},{"location":"guides/Stipple_LifeCycle.html#.-Client-side-rendering","page":"Stipple LifeCycle","title":"2. Client side rendering","text":"","category":"section"},{"location":"guides/Stipple_LifeCycle.html","page":"Stipple LifeCycle","title":"Stipple LifeCycle","text":"the browser receives the HTML response and renders it\nthe browser loads all the JS files bundled with the initial response and executes them","category":"page"},{"location":"guides/Stipple_LifeCycle.html#.-JS-execution-–-client-side","page":"Stipple LifeCycle","title":"3. JS execution – client side","text":"","category":"section"},{"location":"guides/Stipple_LifeCycle.html","page":"Stipple LifeCycle","title":"Stipple LifeCycle","text":"as the browser renders the page, the JS included with the HTML response is executed\nVue.js is loaded and the data passed in the JS/Vue.js model is applied to the HTML elements on the page (ex all the bindings like @text, @bind; logic like @iif, @recur, etc and all the dynamic props of the various elements)\na connection back to the server is established (over WebSockets if available or using Ajax push/pull if WebSockets are not available)\nwhen the connection is successfully established the isready event is triggered, causing the isready property of the Julia model to be switched to true","category":"page"},{"location":"guides/Stipple_LifeCycle.html#.-Async-requests-–-server-side-responses","page":"Stipple LifeCycle","title":"4. Async requests – server side responses","text":"","category":"section"},{"location":"guides/Stipple_LifeCycle.html","page":"Stipple LifeCycle","title":"Stipple LifeCycle","text":"as data is exchanged over the async connection with the frontend, various properties of the Julia model are changed, causing their handlers to be triggered – starting with the automatically triggered isready event\nthe developer implements the logic around these change handlers, responding to events and exchanging data with the frontend\nat this point we can no longer send HTML payloads (because that was part of the initial HTML response at 1 and that connection has closed) - we can only update properties of the model (over the async connection) which are pushed to the frontend causing the UI to update to reflect these changes.\nhowever, this is not necessarily a limitation as we can bind the HTML content of an element to be dynamic and we can update it – or even we can send a JS payload to be executed on the frontend (so we can effectively inject and execute JS logic into the page from the Julia backend).","category":"page"},{"location":"API/stipple.html","page":"Stipple","title":"Stipple","text":"CurrentModule = Stipple","category":"page"},{"location":"API/stipple.html","page":"Stipple","title":"Stipple","text":"Reactive\nReactiveModel\n@reactors\n@reactive\n@reactive!\nSettings\nMissingPropertyException\nrender\nupdate!\nwatch\njs_methods\njs_computed\njs_watch\njs_created\njs_mounted\nclient_data\nregister_components\ncomponents\nsetindex_withoutwatchers!\nsetfield_withoutwatchers!\nconvertvalue\nstipple_parse\ninit\nstipple_deps\nsetup\nBase.push!(m::M, vals::Pair{Symbol, T}; kwargs...) where {T, M <: ReactiveModel}\nrendering_mappings\njulia_to_vue\nparse_jsfunction\nreplace_jsfunction!\nreplace_jsfunction\ndeps_routes\ndeps\n@R_str\non\nonbutton\n@js_str\n@kwredef\n@kwdef","category":"page"},{"location":"API/stipple.html#Stipple.ReactiveModel","page":"Stipple","title":"Stipple.ReactiveModel","text":"type ReactiveModel\n\nThe abstract type that is inherited by Stipple models. Stipple models are used for automatic 2-way data sync and data exchange between the Julia backend and the JavaScript/Vue.js frontend.\n\nExample\n\nBase.@kwdef mutable struct HelloPie <: ReactiveModel\n  plot_options::R{PlotOptions} = PlotOptions(chart_type=:pie, chart_width=380, chart_animations_enabled=true,\n                                            stroke_show = false, labels=[\"Slice A\", \"Slice B\"])\n  piechart::R{Vector{Int}} = [44, 55]\n  values::R{String} = join(piechart, \",\")\nend\n\n\n\n\n\n","category":"type"},{"location":"API/stipple.html#Stipple.render","page":"Stipple","title":"Stipple.render","text":"function render\n\nAbstract function. Needs to be specialized by plugins. It is automatically invoked by Stipple to serialize a Julia data type (corresponding to the fields in the ReactiveModel instance) to JavaScript/JSON. In general the specialized methods should return a Julia Dict which are automatically JSON encoded by Stipple. If custom JSON serialization is required for certain types in the resulting Dict, specialize JSON.lower for that specific type.\n\nExample\n\nfunction Stipple.render(ps::PlotSeries, fieldname::Union{Symbol,Nothing} = nothing)\n  Dict(:name => ps.name, ps.plotdata.key => ps.plotdata.data)\nend\n\nSpecialized JSON rendering for Undefined\n\nJSON.lower(x::Undefined) = \"__undefined__\"\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.update!","page":"Stipple","title":"Stipple.update!","text":"function update! :: {M<:ReactiveModel}\n\nAbstract function used to update the values of the fields in the ReactiveModel based on the data from the frontend. Can be specialized for dedicated types, but it is usually not necessary. If specialized, it must return the update instance of ReactiveModel provided as the first parameter.\n\nExample\n\n```julia function update!(model::M, field::Any, newval::T, oldval::T)::M where {T,M<:ReactiveModel}   setfield!(model, field, newval)\n\nmodel end ````\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.watch","page":"Stipple","title":"Stipple.watch","text":"function watch\n\nAbstract function. Can be used by plugins to define custom Vue.js watch functions.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.js_methods","page":"Stipple","title":"Stipple.js_methods","text":"function js_methods(app::T) where {T<:ReactiveModel}\n\nDefines js functions for the methods section of the vue element. Expected result types of the function are\n\nString containing javascript code\nPair of function name and function code\nFunction returning String of javascript code\nDict of function names and function code\nVector of the above\n\nExample 1\n\njs_methods(::MyDashboard) = \"\"\"\n  mysquare: function (x) {\n    return x^2\n  }\n  myadd: function (x, y) {\n    return x + y\n  }\n\"\"\"\n\nExample 2\n\njs_methods(::MyDashboard) = Dict(:f => \"function(x) { console.log('x: ' + x) })\n\nExample 3\n\njs_greet() = :greet => \"function(name) {console.log('Hello ' + name)}\"\njs_bye() = :bye => \"function() {console.log('Bye!')}\"\njs_methods(::MyDashboard) = [js_greet, js_bye]\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.js_computed","page":"Stipple","title":"Stipple.js_computed","text":"function js_computed(app::T) where {T<:ReactiveModel}\n\nDefines js functions for the computed section of the vue element. These properties are updated every time on of the inner parameters changes its value. Expected result types of the function are\n\nString containing javascript code\nPair of function name and function code\nFunction returning String of javascript code\nDict of function names and function code\nVector of the above\n\nExample\n\njs_computed(app::MyDashboard) = \"\"\"\n  fullName: function () {\n    return this.firstName + ' ' + this.lastName\n  }\n\"\"\"\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.js_watch","page":"Stipple","title":"Stipple.js_watch","text":"function js_watch(app::T) where {T<:ReactiveModel}\n\nDefines js functions for the watch section of the vue element. These functions are called every time the respective property changes. Expected result types of the function are\n\nString containing javascript code\nPair of function name and function code\nFunction returning String of javascript code\nDict of function names and function code\nVector of the above\n\nExample\n\nUpdates the fullName every time firstName or lastName changes.\n\njs_watch(app::MyDashboard) = \"\"\"\n  firstName: function (val) {\n    this.fullName = val + ' ' + this.lastName\n  },\n  lastName: function (val) {\n    this.fullName = this.firstName + ' ' + val\n  }\n\"\"\"\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.js_created","page":"Stipple","title":"Stipple.js_created","text":"function js_created(app::T)::Union{Function, String, Vector} where {T<:ReactiveModel}\n\nDefines js statements for the created section of the vue element.\n\nResult types of the function can be\n\nString containing javascript code\nFunction returning String of javascript code\nVector of the above\n\nExample 1\n\njs_created(app::MyDashboard) = \"\"\"\n    if (this.cameraon) { startcamera() }\n\"\"\"\n\nExample 2\n\nstartcamera() = \"if (this.cameraon) { startcamera() }\"\nstopcamera() = \"if (this.cameraon) { stopcamera() }\"\n\njs_created(app::MyDashboard) = [startcamera, stopcamera]\n\nChecking the result can be done in the following way\n\njulia> render(MyApp())[:created]\nJSONText(\"function(){\n    if (this.cameraon) { startcamera() }\n\n    if (this.cameraon) { stopcamera() }\n}\")\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.js_mounted","page":"Stipple","title":"Stipple.js_mounted","text":"function js_mounted(app::T)::Union{Function, String, Vector} where {T<:ReactiveModel}\n\nDefines js statements for the mounted section of the vue element.\n\nResult types of the function can be\n\nString containing javascript code\nFunction returning String of javascript code\nVector of the above\n\nExample 1\n\njs_mounted(app::MyDashboard) = \"\"\"\n    if (this.cameraon) { startcamera() }\n\"\"\"\n\nExample 2\n\nstartcamera() = \"if (this.cameraon) { startcamera() }\"\nstopcamera() = \"if (this.cameraon) { stopcamera() }\"\n\njs_mounted(app::MyDashboard) = [startcamera, stopcamera]\n\nChecking the result can be done in the following way\n\njulia> render(MyApp())[:mounted]\nJSONText(\"function(){\n    if (this.cameraon) { startcamera() }\n\n    if (this.cameraon) { stopcamera() }\n}\")\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.client_data","page":"Stipple","title":"Stipple.client_data","text":"function client_data(app::T)::String where {T<:ReactiveModel}\n\nDefines additional data that will only be visible by the browser.\n\nIt is meant to keep volatile data, e.g. form data that needs to pass a validation first. In order to use the data you most probably also want to define js_methods\n\nExample\n\nimport Stipple.client_data\nclient_data(m::Example) = client_data(client_name = js\"null\", client_age = js\"null\", accept = false)\n\nwill define the additional fields client_name, client_age and accept for the model Example. These should, of course, not overlap with existing fields of your model.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.register_components","page":"Stipple","title":"Stipple.register_components","text":"function register_components(model::Type{M}, keysvals::AbstractVector) where {M<:ReactiveModel}\n\nUtility function for adding Vue components that need to be registered with the Vue.js app. This is usually needed for registering components provided by Stipple plugins.\n\nExample\n\nStipple.register_components(HelloPie, StippleCharts.COMPONENTS)\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.components","page":"Stipple","title":"Stipple.components","text":"function components(m::Type{M})::String where {M<:ReactiveModel}\nfunction components(app::M)::String where {M<:ReactiveModel}\n\nJSON representation of the Vue.js components registered for the ReactiveModel M.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.setindex_withoutwatchers!","page":"Stipple","title":"Stipple.setindex_withoutwatchers!","text":"setindex_withoutwatchers!(field::Reactive, val; notify=(x)->true)\nsetindex_withoutwatchers!(field::Reactive, val, keys::Int...; notify=(x)->true)\n\nChange the content of a Reactive field without triggering the listeners. If keys are specified, only these listeners are exempted from triggering.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.setfield_withoutwatchers!","page":"Stipple","title":"Stipple.setfield_withoutwatchers!","text":"setfield_withoutwatchers!(app::ReactiveModel, field::Symmbol, val; notify=(x)->true)\nsetfield_withoutwatchers!(app::ReactiveModel, field::Symmbol, val, keys...; notify=(x)->true)\n\nChange the field of a ReactiveModel without triggering the listeners. If keys are specified, only these listeners are exempted from triggering.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.init","page":"Stipple","title":"Stipple.init","text":"function init(::Type{M};\n                vue_app_name::S = Stipple.Elements.root(M),\n                endpoint::S = vue_app_name,\n                channel::Union{Any,Nothing} = nothing,\n                debounce::Int = JS_DEBOUNCE_TIME,\n                transport::Module = Genie.WebChannels,\n                core_theme::Bool = true)::M where {M<:ReactiveModel, S<:AbstractString}\n\nInitializes the reactivity of the model M by setting up the custom JavaScript for integrating with the Vue.js frontend and perform the 2-way backend-frontend data sync. Returns the instance of the model.\n\nExample\n\nhs_model = Stipple.init(HelloPie)\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.setup","page":"Stipple","title":"Stipple.setup","text":"function setup(model::M, channel = Genie.config.webchannels_default_route)::M where {M<:ReactiveModel}\n\nConfigures the reactive handlers for the reactive properties of the model. Called internally.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Base.push!-Union{Tuple{M}, Tuple{T}, Tuple{M, Pair{Symbol, T}}} where {T, M<:ReactiveModel}","page":"Stipple","title":"Base.push!","text":"Base.push!(app::M, vals::Pair{Symbol,T}; channel::String,\n            except::Union{Genie.WebChannels.HTTP.WebSockets.WebSocket,Nothing,UInt}) where {T,M<:ReactiveModel}\n\nPushes data payloads over to the frontend by broadcasting the vals through the channel.\n\n\n\n\n\n","category":"method"},{"location":"API/stipple.html#Stipple.rendering_mappings","page":"Stipple","title":"Stipple.rendering_mappings","text":"function rendering_mappings(mappings = Dict{String,String})\n\nRegisters additional mappings as Julia to Vue properties mappings  (eg foobar to foo-bar).\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.julia_to_vue","page":"Stipple","title":"Stipple.julia_to_vue","text":"function julia_to_vue(field, mapping_keys = mapping_keys())\n\nConverts Julia names to Vue names (eg foobar to foo-bar).\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.parse_jsfunction","page":"Stipple","title":"Stipple.parse_jsfunction","text":"function parse_jsfunction(s::AbstractString)\n\nChecks whether the string is a valid js function and returns a Dict from which a reviver function in the backend can construct a function.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.replace_jsfunction!","page":"Stipple","title":"Stipple.replace_jsfunction!","text":"function replace_jsfunction!(js::Union{Dict, JSONText})\n\nReplaces all JSONText values that contain a valid js function by a Dict that codes the function for a reviver. For JSONText variables it encapsulates the dict in a JSONText to make the function type stable.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.replace_jsfunction","page":"Stipple","title":"Stipple.replace_jsfunction","text":"Replaces all JSONText values on a copy of the input, see replace_jsfunction!.\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.deps","page":"Stipple","title":"Stipple.deps","text":"function deps(channel::String = Genie.config.webchannels_default_route)\n\nOutputs the HTML code necessary for injecting the dependencies in the page (the <script> tags).\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Observables.on","page":"Stipple","title":"Observables.on","text":"on(f, observable::AbstractObservable; weak = false, priority=0, update=false)::ObserverFunction\n\nAdds function f as listener to observable. Whenever observable's value is set via observable[] = val, f is called with val.\n\nReturns an ObserverFunction that wraps f and observable and allows to disconnect easily by calling off(observerfunction) instead of off(f, observable). If instead you want to compute a new Observable from an old one, use map(f, ::Observable).\n\nIf weak = true is set, the new connection will be removed as soon as the returned ObserverFunction is not referenced anywhere and is garbage collected. This is useful if some parent object makes connections to outside observables and stores the resulting ObserverFunction instances. Then, once that parent object is garbage collected, the weak observable connections are removed automatically.\n\nExample\n\njulia> obs = Observable(0)\nObservable(0)\n\njulia> on(obs) do val\n           println(\"current value is \", val)\n       end\nObserverFunction defined at REPL[17]:2 operating on Observable(0)\njulia> obs[] = 5;\ncurrent value is 5\n\nOne can also give the callback a priority, to enable always calling a specific callback before/after others, independent of the order of registration. The callback with the highest priority gets called first, the default is zero, and the whole range of Int can be used. So one can do:\n\njulia> obs = Observable(0)\njulia> on(obs; priority=-1) do x\n           println(\"Hi from first added\")\n       end\njulia> on(obs) do x\n           println(\"Hi from second added\")\n       end\njulia> obs[] = 2\nHi from second added\nHi from first added\n\nIf you set update=true, on will call f(obs[]) immediately:\n\njulia> on(Observable(1); update=true) do x\n    println(\"hi\")\nend\nhi\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.onbutton","page":"Stipple","title":"Stipple.onbutton","text":"onbutton(f::Function, button::R{Bool}; async = false, weak = false)\n\nLinks a function to a reactive boolean parameter, typically a representing a button of an app. After the function is called, the parameter is set back to false. The async keyword specifies whether the call should be made asynchroneously or not.\n\nExample\n\nonbutton(model.save_button) do\n  # save what has to be saved\nend\n\n\n\n\n\n","category":"function"},{"location":"API/stipple.html#Stipple.@js_str","page":"Stipple","title":"Stipple.@js_str","text":"@js_str -> JSONText\n\nConstruct a JSONText, such as js\"button=false\", without interpolation and unescaping (except for quotation marks \"which still has to be escaped). Avoiding escaping\"`can be done byjs\"\"\"alert(\"Hello World\")\"\"\"`.\n\n\n\n\n\n","category":"macro"},{"location":"API/stipple.html#Stipple.@kwredef","page":"Stipple","title":"Stipple.@kwredef","text":"@kwredef(expr)\n\nHelper function during development that is a one-to-one replacement for @kwdef but allows for redefinition of the struct.\n\nInternally it defines a new struct with a number appended to the original struct name and assigns this struct to a variable with the original struct name.\n\n\n\n\n\n","category":"macro"},{"location":"API/stipple.html#Stipple.@kwdef","page":"Stipple","title":"Stipple.@kwdef","text":"Stipple.@kwdef\n\nHelper function for model definition that acts as a one-to-one replacement for Base.@kwdef.\n\nWhen Genie.Configuration.isprod() == true this macro calls @kwredef and allows for redefinition of models. Otherwise it calls Base.@kwdef.\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html","page":"Elements","title":"Elements","text":"CurrentModule = Elements","category":"page"},{"location":"API/elements.html","page":"Elements","title":"Elements","text":"root\nelem\nvm\nvue_integration\n@iif\n@elsiff\n@els\n@recur\n@text\n@bind\n@data\n@on\n@showif\nstylesheet","category":"page"},{"location":"API/elements.html#Stipple.Elements.root","page":"Elements","title":"Stipple.Elements.root","text":"function root(app::M)::String where {M<:ReactiveModel}\n\nGenerates a valid JavaScript object name to be used as the name of the Vue app – and its respective HTML container.\n\n\n\n\n\n","category":"function"},{"location":"API/elements.html#Stipple.Elements.elem","page":"Elements","title":"Stipple.Elements.elem","text":"function elem(app::M)::String where {M<:ReactiveModel}\n\nGenerates a JS id # reference to the DOM element containing the Vue app template.\n\n\n\n\n\n","category":"function"},{"location":"API/elements.html#Stipple.Elements.vm","page":"Elements","title":"Stipple.Elements.vm","text":"function root(app::M)::String where {M<:ReactiveModel}\n\nGenerates a valid JavaScript object name to be used as the name of the Vue app – and its respective HTML container.\n\n\n\n\n\n","category":"function"},{"location":"API/elements.html#Stipple.Elements.vue_integration","page":"Elements","title":"Stipple.Elements.vue_integration","text":"function vue_integration(model::M; vue_app_name::String, endpoint::String, debounce::Int)::String where {M<:ReactiveModel}\n\nGenerates the JS/Vue.js code which handles the 2-way data sync between Julia and JavaScript/Vue.js. It is called internally by Stipple.init which allows for the configuration of all the parameters.\n\n\n\n\n\n","category":"function"},{"location":"API/elements.html#Stipple.Elements.@iif","page":"Elements","title":"Stipple.Elements.@iif","text":"@iif(expr)\n\nGenerates v-if Vue.js code using expr as the condition. https://vuejs.org/v2/api/#v-if\n\nExample\n\njulia> span(\"Bad stuff's about to happen\", class=\"warning\", @iif(:warning))\n\"<span class=\"warning\" v-if='warning'>Bad stuff's about to happen</span>\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@els","page":"Elements","title":"Stipple.Elements.@els","text":"@els(expr)\n\nGenerates v-else Vue.js code using expr as the condition. https://vuejs.org/v2/api/#v-else\n\nExample\n\njulia> span(\"Might want to keep an eye on this\", class=\"notice\", @els(:notice))\n\"<span class=\"notice\" v-else='notice'>Might want to keep an eye on this</span>\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@recur","page":"Elements","title":"Stipple.Elements.@recur","text":"Generates v-for directive to render a list of items based on an array. https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for\n\nExample\n\njulia> p(\" {{todo}} \", class=\"warning\", @recur(:\"todo in todos\"))\n\"<p v-for='todo in todos'>\n {{todo}} \n</p>\n\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@text","page":"Elements","title":"Stipple.Elements.@text","text":"@text(expr)\n\nCreates a v-text or a text-content.prop Vue biding to the element's textContent property. https://vuejs.org/v2/api/#v-text\n\nExample\n\njulia> span(\"\", @text(\"abc | def\"))\n\"<span :text-content.prop='abc | def'></span>\"\n\njulia> span(\"\", @text(\"abc\"))\n\"<span v-text='abc'></span>\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@bind","page":"Elements","title":"Stipple.Elements.@bind","text":"@bind(expr, [type])\n\nBinds a model parameter to a Vue component, generating a v-model property, optionally defining the parameter type. https://vuejs.org/v2/api/#v-model\n\nExample\n\njulia> input(\"\", placeholder=\"Type your name\", @bind(:name))\n\"<input placeholder=\"Type your name\"  v-model='name' />\"\n\njulia> input(\"\", placeholder=\"Type your name\", @bind(:name, :identity))\n\"<input placeholder=\"Type your name\"  v-model.identity='name' />\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@data","page":"Elements","title":"Stipple.Elements.@data","text":"@data(expr)\n\nCreates a Vue.js data binding for the elements that expect it.\n\nExample\n\njulia> plot(@data(:piechart), options! = \"plot_options\")\n\"<template><apexchart :options=\"plot_options\" :series=\"piechart\"></apexchart></template>\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@on","page":"Elements","title":"Stipple.Elements.@on","text":"on(action, expr)\n\nDefines a js routine that is called by the given action of the Vue component, e.g. :click, :input\n\nExample\n\njulia> input(\"\", @bind(:input), @on(\"keyup.enter\", \"process = true\"))\n\"<input  v-model='input' v-on:keyup.enter='process = true' />\"\n\nIf expr is a symbol, there must exist Stipple.notify override, i.e. an event handler function for a corresponding event with the name expr.\n\nExample\n\njulia> Stipple.notify(model, ::Val{:my_click}) = println(\"clicked\")\n\nor if event information is needed\n\nStipple.notify(model, ::Val{:my_click}, event_info) = println(event_info)\n\nNote that in the handler model refers to the receiving model and event is a Dict of event information. The handler is linked in the ui-element\n\nbtn(\"Event test\", @on(\"click\", :my_click))\n\nSometimes preprocessing of the events is necessary, e.g. to add or skip information\n\n@on(:uploaded, :uploaded, \"for (f in event.files) { event.files[f].fname = event.files[f].name }\")\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.@showif","page":"Elements","title":"Stipple.Elements.@showif","text":"@showif(expr, [type])\n\nv-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element. https://vuejs.org/v2/guide/conditional.html#v-show\n\nDifference between @showif and @iif when to use either\n\nv-if has higher toggle costs while v-show has higher initial render costs\n\nExample\n\njulia> h1(\"Hello!\", @showif(:ok))\n\"<h1 v-show=\"ok\">Hello!</h1>\"\n\n\n\n\n\n","category":"macro"},{"location":"API/elements.html#Stipple.Elements.stylesheet","page":"Elements","title":"Stipple.Elements.stylesheet","text":"function stylesheet(href::String; args...) :: String\n\nGenerates the corresponding HTML link tag to reference the CSS stylesheet at href.\n\nExample\n\njulia> stylesheet(\"https://fonts.googleapis.com/css?family=Material+Icons\")\n\"<link href=\"https://fonts.googleapis.com/css?family=Material+Icons\" rel=\"stylesheet\" />\"\n\n\n\n\n\n","category":"function"},{"location":"index.html#Stipple","page":"Home","title":"Stipple","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Julia library for data dashboards and reactive UIs.","category":"page"},{"location":"API/namedtuples.html","page":"NamedTuples","title":"NamedTuples","text":"CurrentModule = NamedTuples","category":"page"},{"location":"API/namedtuples.html","page":"NamedTuples","title":"NamedTuples","text":"Core.NamedTuple","category":"page"},{"location":"API/namedtuples.html#Core.NamedTuple","page":"NamedTuples","title":"Core.NamedTuple","text":"NamedTuple\n\nNamedTuples are, as their name suggests, named Tuples. That is, they're a tuple-like collection of values, where each entry has a unique name, represented as a Symbol. Like Tuples, NamedTuples are immutable; neither the names nor the values can be modified in place after construction.\n\nAccessing the value associated with a name in a named tuple can be done using field access syntax, e.g. x.a, or using getindex, e.g. x[:a] or x[(:a, :b)]. A tuple of the names can be obtained using keys, and a tuple of the values can be obtained using values.\n\nnote: Note\nIteration over NamedTuples produces the values without the names. (See example below.) To iterate over the name-value pairs, use the pairs function.\n\nThe @NamedTuple macro can be used for conveniently declaring NamedTuple types.\n\nExamples\n\njulia> x = (a=1, b=2)\n(a = 1, b = 2)\n\njulia> x.a\n1\n\njulia> x[:a]\n1\n\njulia> x[(:a,)]\n(a = 1,)\n\njulia> keys(x)\n(:a, :b)\n\njulia> values(x)\n(1, 2)\n\njulia> collect(x)\n2-element Vector{Int64}:\n 1\n 2\n\njulia> collect(pairs(x))\n2-element Vector{Pair{Symbol, Int64}}:\n :a => 1\n :b => 2\n\nIn a similar fashion as to how one can define keyword arguments programmatically, a named tuple can be created by giving a pair name::Symbol => value or splatting an iterator yielding such pairs after a semicolon inside a tuple literal:\n\njulia> (; :a => 1)\n(a = 1,)\n\njulia> keys = (:a, :b, :c); values = (1, 2, 3);\n\njulia> (; zip(keys, values)...)\n(a = 1, b = 2, c = 3)\n\nAs in keyword arguments, identifiers and dot expressions imply names:\n\njulia> x = 0\n0\n\njulia> t = (; x)\n(x = 0,)\n\njulia> (; t.x)\n(x = 0,)\n\ncompat: Julia 1.5\nImplicit names from identifiers and dot expressions are available as of Julia 1.5.\n\ncompat: Julia 1.7\nUse of getindex methods with multiple Symbols is available as of Julia 1.7.\n\n\n\n\n\n","category":"type"}]
}
