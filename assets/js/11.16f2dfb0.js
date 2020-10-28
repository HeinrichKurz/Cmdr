(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{400:function(e,a,t){"use strict";t.r(a);var o=t(41),v=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"v1-8-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-8-3"}},[e._v("#")]),e._v(" v1.8.3")]),e._v(" "),t("ul",[t("li",[e._v('"% teamPlayers" prefix was accidentally removed from '),t("code",[e._v("players")]),e._v(" type, so this adds it back.")])]),e._v(" "),t("h1",{attrs:{id:"v1-8-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-8-2"}},[e._v("#")]),e._v(" v1.8.2")]),e._v(" "),t("ul",[t("li",[e._v("Fix pressing tab doesn't insert space (#149)")])]),e._v(" "),t("h1",{attrs:{id:"v1-8-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-8-1"}},[e._v("#")]),e._v(" v1.8.1")]),e._v(" "),t("ul",[t("li",[e._v("Fixes issue with autocomplete in lists")]),e._v(" "),t("li",[e._v("Fixes init-run command in unpublished games")]),e._v(" "),t("li",[e._v("Fix boolean type erroring given the empty string")])]),e._v(" "),t("h1",{attrs:{id:"v1-8-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-8-0"}},[e._v("#")]),e._v(" v1.8.0")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("var")]),e._v(" and "),t("code",[e._v("var=")]),e._v(" default commands, which act as a persistent key-value store.\n"),t("ul",[t("li",[e._v("Keys can begin with a dot to be per-session only.")]),e._v(" "),t("li",[e._v("Keys can begin with a $ to be game-wide, shared among all players.")]),e._v(" "),t("li",[e._v("Keys can begin with $. to be game-wide and per-session.")])])]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("fetch")]),e._v(" command, which fetches and returns data from the Internet.")]),e._v(" "),t("li",[e._v("Generalize the "),t("code",[e._v("*")]),e._v(", "),t("code",[e._v(".")]),e._v(", "),t("code",[e._v("?")]),e._v(", and "),t("code",[e._v("?N")]),e._v(" operators from the player type for all types.\n"),t("ul",[t("li",[e._v("Adds a "),t("code",[e._v("Default")]),e._v(' function to types to determine their "default" value, this maps to '),t("code",[e._v(".")])]),e._v(" "),t("li",[t("code",[e._v("*")]),e._v(" is determined by calling the "),t("code",[e._v("Autocomplete")]),e._v(" function with an empty string")]),e._v(" "),t("li",[t("code",[e._v("?")]),e._v(" is a single random value from the above;")]),e._v(" "),t("li",[t("code",[e._v("?N")]),e._v(" represents a list of N random values;")]),e._v(" "),t("li",[t("code",[e._v("**")]),e._v(" is "),t("code",[e._v("*")]),e._v(" (all) minus "),t("code",[e._v(".")]),e._v(' (default), which is commonly referred to as "others" in the '),t("code",[e._v("player")]),e._v(" type")])])]),e._v(" "),t("li",[e._v("Fix client side validation to disallow sending commands with incomplete arguments")]),e._v(" "),t("li",[e._v("New commands "),t("code",[e._v("json-array-encode")]),e._v(" and "),t("code",[e._v("json-array-decode")])]),e._v(" "),t("li",[e._v("New command "),t("code",[e._v("resolve")]),e._v(", which resolves the argument value operators into lists.")]),e._v(" "),t("li",[e._v("New commands "),t("code",[e._v("len")]),e._v(", "),t("code",[e._v("pick")]),e._v(", and "),t("code",[e._v("rand")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("run")]),e._v(" now has an alias: "),t("code",[e._v(">")])]),e._v(" "),t("li",[t("code",[e._v("replace")]),e._v(" now has an alias: "),t("code",[e._v("//")])]),e._v(" "),t("li",[t("code",[e._v("run")]),e._v(" command now supports multiple commands delimited by "),t("code",[e._v("&&")]),e._v(" "),t("ul",[t("li",[e._v("Slot operator allows you to insert the output of the previous command in a chain of commands separated by "),t("code",[e._v("&&")]),e._v(". For example: "),t("code",[e._v("> echo evaera && kill ||")]),e._v(" (evaera dies)")])])]),e._v(" "),t("li",[e._v("New command "),t("code",[e._v("edit")]),e._v(" allows you to edit text within a text area")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("join")]),e._v(" and "),t("code",[e._v("map")]),e._v(" commands")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("goto-place")]),e._v(", "),t("code",[e._v("follow-player")]),e._v(", "),t("code",[e._v("rejoin")]),e._v(", and "),t("code",[e._v("get-player-place-instance")]),e._v(" commands.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("refresh")]),e._v(" command.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("uptime")]),e._v(" command.")]),e._v(" "),t("li",[e._v("Cmdr no longer removes preceding skipped arguments ("),t("code",[e._v('""')]),e._v(") when using AutoComplete on a later argument (#104)")]),e._v(" "),t("li",[t("code",[e._v("GetCommandsAsStrings")]),e._v(" has been renamed to "),t("code",[e._v("GetCommandNames")]),e._v("; old name still works for backwards compatibility")])]),e._v(" "),t("h1",{attrs:{id:"v1-7-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-7-1"}},[e._v("#")]),e._v(" v1.7.1")]),e._v(" "),t("ul",[t("li",[e._v("Handle non-string error values correctly")])]),e._v(" "),t("h1",{attrs:{id:"v1-7-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-7-0"}},[e._v("#")]),e._v(" v1.7.0")]),e._v(" "),t("ul",[t("li",[e._v("Cmdr now calls tostring on error objects emitted from commands (#144)")]),e._v(" "),t("li",[e._v("Cmdr now includes the full trace back in error messages.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://eryn.io/Cmdr/guide/MetaCommands.html#alias",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aliases can now include type checking and name information in arguments"),t("OutboundLink")],1),e._v(" (#56)")]),e._v(" "),t("li",[e._v('New default command: "me". Displays the current player\'s name.')]),e._v(" "),t("li",[e._v("Make "),t("code",[e._v("bring")]),e._v(" and "),t("code",[e._v("to")]),e._v(" commands built-in aliases for "),t("code",[e._v("teleport")]),e._v(". "),t("code",[e._v("to")]),e._v(" has effectively moved from the "),t("code",[e._v("DefaultDebug")]),e._v(" group to the "),t("code",[e._v("DefaultAdmin")]),e._v(" group. (#115)")]),e._v(" "),t("li",[e._v("The default activation key is now "),t("kbd",[e._v("F2")])])]),e._v(" "),t("h1",{attrs:{id:"v1-6-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-6-0"}},[e._v("#")]),e._v(" v1.6.0")]),e._v(" "),t("ul",[t("li",[e._v("Add random selector for player type (#122)")]),e._v(" "),t("li",[e._v("Fixed so TextBox is not selectable using controller (#124)")]),e._v(" "),t("li",[e._v("Fixed AutoExec commands being executed multiple times (#127)")]),e._v(" "),t("li",[e._v("Added configurable hide on lost focus behavior (#129)")]),e._v(" "),t("li",[e._v("Added version command (#130)")]),e._v(" "),t("li",[e._v("Fix Window auto complete cursor positions (#141)")]),e._v(" "),t("li",[e._v("Add CommandContext:HasImplementation (#138)")]),e._v(" "),t("li",[e._v("Commands will no longer run in-game if no BeforeRun hook is configured (#132)")])]),e._v(" "),t("h1",{attrs:{id:"v1-5-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-5-0"}},[e._v("#")]),e._v(" v1.5.0")]),e._v(" "),t("ul",[t("li",[e._v("Adds AutoComplete IsPartial (#103)")]),e._v(" "),t("li",[e._v("Added dynamic argument types (#93)")]),e._v(" "),t("li",[e._v("Allow type inlining in command defs")]),e._v(" "),t("li",[e._v("Duration type now allows negative values")]),e._v(" "),t("li",[e._v("Fix a bug where sparse values in value list caused dropped arguments")]),e._v(" "),t("li",[e._v("Added default command: respawn (#113)")])]),e._v(" "),t("h1",{attrs:{id:"v1-4-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-4-0"}},[e._v("#")]),e._v(" v1.4.0")]),e._v(" "),t("ul",[t("li",[e._v("Add support for "),t("code",[e._v("ClientRun")]),e._v(" (#97).")])]),e._v(" "),t("h1",{attrs:{id:"v1-3-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-3-0"}},[e._v("#")]),e._v(" v1.3.0")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("Prefixes")]),e._v(" to Types")]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("Registry:RegisterTypePrefix")])]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("Registry:RegisterTypeAlias")])]),e._v(" "),t("li",[e._v("Add "),t("code",[e._v("override")]),e._v(" parameter to "),t("code",[e._v("Util.MakeListableType")])])]),e._v(" "),t("h1",{attrs:{id:"v1-2-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-2"}},[e._v("#")]),e._v(" v1.2.2")]),e._v(" "),t("ul",[t("li",[e._v("Make new lines work in command window. (#84)")])]),e._v(" "),t("h1",{attrs:{id:"v1-2-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-1"}},[e._v("#")]),e._v(" v1.2.1")]),e._v(" "),t("ul",[t("li",[e._v("Fix bug where Data did not get sent correctly (#85)")])]),e._v(" "),t("h1",{attrs:{id:"v1-2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-0"}},[e._v("#")]),e._v(" v1.2.0")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("others")]),e._v(" shorthand for players type")]),e._v(" "),t("li",[e._v("Added APIs for showing and hiding the Cmdr window explicitly")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("CmdrClient:SetActivationUnlocksMouse")]),e._v(" for freeing mouse upon activation")])]),e._v(" "),t("h1",{attrs:{id:"v1-1-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-5"}},[e._v("#")]),e._v(" v1.1.5")]),e._v(" "),t("ul",[t("li",[e._v("Empty quoted sequences ("),t("code",[e._v('""')]),e._v(") can now be used to skip arguments which have default values")])]),e._v(" "),t("h1",{attrs:{id:"v1-1-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-4"}},[e._v("#")]),e._v(" v1.1.4")]),e._v(" "),t("ul",[t("li",[e._v("Fix an issue where the "),t("code",[e._v("filter")]),e._v(" argument of "),t("code",[e._v("RegisterDefaultCommands")]),e._v(" was nonfunctional.")])]),e._v(" "),t("h1",{attrs:{id:"v1-1-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-3"}},[e._v("#")]),e._v(" v1.1.3")]),e._v(" "),t("ul",[t("li",[e._v("Fix an issue where the arrow keys could be used to open auto complete when the menu is closed (#62)")]),e._v(" "),t("li",[e._v("Make AutoExec commands only run on the client (#61)")])]),e._v(" "),t("h1",{attrs:{id:"v1-1-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-2"}},[e._v("#")]),e._v(" v1.1.2")]),e._v(" "),t("h2",{attrs:{id:"command-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-history"}},[e._v("#")]),e._v(" Command history")]),e._v(" "),t("ul",[t("li",[e._v("Up/down arrow now traverses command history when you haven't entered any text.")]),e._v(" "),t("li",[e._v("New "),t("code",[e._v("history")]),e._v(" utility command which dynamically returns your previously-entered commands based on a number index.")]),e._v(" "),t("li",[e._v("New alias "),t("code",[e._v("! <number>")]),e._v(" to re-run previous commands.\n"),t("ul",[t("li",[t("code",[e._v("! -1")]),e._v(" re-reruns your last command.")]),e._v(" "),t("li",[t("code",[e._v("! 2")]),e._v(" re-runs your second command.")])])]),e._v(" "),t("li",[e._v("New alias "),t("code",[e._v("!!")]),e._v(" to re-run your last command.")]),e._v(" "),t("li",[e._v("New alias "),t("code",[e._v("^ <search> <replace>")]),e._v(" to re-run your last command with string substitution, replacing "),t("code",[e._v("search")]),e._v(" with "),t("code",[e._v("replace")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"new-utility-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-utility-commands"}},[e._v("#")]),e._v(" New utility commands")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("history")]),e._v(" (see above)")]),e._v(" "),t("li",[t("code",[e._v("position [player]")]),e._v(": Returns the Vector3 position of a player (or yourself if omitted) as a string "),t("code",[e._v("X,Y,Z")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("replace <haystack> <needle> <replacement>")]),e._v(": Substitutes text inside "),t("code",[e._v("haystack")]),e._v(" matching Lua pattern "),t("code",[e._v("needle")]),e._v(" with "),t("code",[e._v("replacement")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("discard <command string>")]),e._v(": Identical to "),t("code",[e._v("run")]),e._v(", except the return value is discarded (always returns "),t("code",[e._v('""')]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("clear")]),e._v(": Clears the console")])]),e._v(" "),t("h2",{attrs:{id:"new-default-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-default-types"}},[e._v("#")]),e._v(" New default types")]),e._v(" "),t("ul",[t("li",[e._v("Plural primitives (strings, numbers, integers, booleans)\n"),t("ul",[t("li",[t("em",[e._v("Plural")]),e._v(" types simply resolve into an array of the named type.")])])]),e._v(" "),t("li",[e._v("brickColor(s)")]),e._v(" "),t("li",[e._v("teamColor(s): Resolve into a BrickColor based on the color of a Team")]),e._v(" "),t("li",[e._v("color3(s)")]),e._v(" "),t("li",[e._v("hexColor3(s): Resolve into a Color3 from a hexadecimal color")]),e._v(" "),t("li",[e._v("brickColor3(s): Resolve  into a Color3 from a BrickColor")]),e._v(" "),t("li",[e._v("vector3(s), vector(2)s")]),e._v(" "),t("li",[e._v("duration(s): Resolve human-readable times like 20Minutes, 2Hours, 1Year into a number of seconds.")])]),e._v(" "),t("h2",{attrs:{id:"usage-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-improvements"}},[e._v("#")]),e._v(" Usage improvements")]),e._v(" "),t("ul",[t("li",[e._v("Cmdr now supports escape sequences\n"),t("ul",[t("li",[t("code",[e._v("\\\\")]),e._v(" for escaping a literal backslash")]),e._v(" "),t("li",[t("code",[e._v('\\"')]),e._v(" and "),t("code",[e._v("\\'")]),e._v(" for escaping quotes inside of strings")]),e._v(" "),t("li",[t("code",[e._v("\\t")]),e._v(" "),t("ul",[t("li",[e._v("Tab stops display as expected when "),t("code",[e._v("\\t")]),e._v(" is present in a line on the console")])])]),e._v(" "),t("li",[t("code",[e._v("\\n")]),e._v(" "),t("ul",[t("li",[e._v("New lines are not displayed in the console as of right now and are displayed as a space. However, "),t("code",[e._v("\\n")]),e._v(" literals may still be useful for custom commands.")])])]),e._v(" "),t("li",[t("code",[e._v("\\xA9")]),e._v(" (2-digit) and "),t("code",[e._v("\\u2661")]),e._v(" (4-digit) hexadecimal unicode escapes")]),e._v(" "),t("li",[t("code",[e._v("\\$")]),e._v(" for escaping argument replacements and embedded commands in command strings "),t("em",[e._v("only")]),e._v(".")]),e._v(" "),t("li",[e._v("Invalid escape sequences are left in-place.")])])]),e._v(" "),t("li",[t("code",[e._v("help")]),e._v(" command now lists command aliases")]),e._v(" "),t("li",[t("code",[e._v("teleport")]),e._v(" and "),t("code",[e._v("to")]),e._v(" now accept a Vector3 with the "),t("code",[e._v("@")]),e._v(" prefix")])]),e._v(" "),t("h2",{attrs:{id:"api-improvements-and-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-improvements-and-changes"}},[e._v("#")]),e._v(" API Improvements and Changes")]),e._v(" "),t("ul",[t("li",[e._v("Cmdr now enforces that types begin with a lowercase letter or digit for consistency.")]),e._v(" "),t("li",[t("code",[e._v("Dispatcher:RegisterHooksIn")]),e._v(", "),t("code",[e._v("RegisterTypesIn")]),e._v(", and "),t("code",[e._v("RegisterCommandsIn")]),e._v(" now allow nesting via folders.")]),e._v(" "),t("li",[t("code",[e._v("Dispatcher:AddHook")]),e._v(" has been renamed to "),t("code",[e._v("Dispatcher:RegisterHook")]),e._v(". The old name still exists as a fallback, but is undocumented and may be removed in the future.")]),e._v(" "),t("li",[e._v("Cmdr now throws an error if a command has both "),t("code",[e._v("Data")]),e._v(" and "),t("code",[e._v("Run")]),e._v(" (not a bug, but if someone is doing this then they are confused)")]),e._v(" "),t("li",[e._v("Hooks now have an optional third parameter "),t("code",[e._v("priority")]),e._v(". Hooks run in order of priority; lower numbers run first. The default priority is "),t("code",[e._v("0")]),e._v(".")]),e._v(" "),t("li",[e._v("CommandContexts now have an empty "),t("code",[e._v("State")]),e._v(" table. This is intended to be used in combination with the "),t("code",[e._v("BeforeRun")]),e._v(" hook to allow you to add custom information to this command that you can consume inside of your command logic or other hooks.\n"),t("ul",[t("li",[e._v("For example, if you want many commands to have different behavior based on someone's rank, you can add their rank in the "),t("code",[e._v("State")]),e._v(" table for your commands to consume and branch off of.")])])]),e._v(" "),t("li",[e._v("New function "),t("code",[e._v("CmdrClient:SetMashToEnable(true)")]),e._v(" to enable "),t("em",[e._v("Mash to Enable")]),e._v(" mode, which requires the player to press the activation key 7 times in quick succession to open the Cmdr menu for the first time. This is not meant as a security feature, but rather as a way to ensure that the console is not accidentally obtrusive to regular players of your game.")]),e._v(" "),t("li",[e._v("New client-only function "),t("code",[e._v("Dispatcher:GetHistory()")]),e._v(" to get an array of the local user's command history. This only includes commands actually typed by the user, no embedded or programmatically run commands.")]),e._v(" "),t("li",[t("code",[e._v("Dispatcher:EvaluateAndRun")]),e._v(" now accepts an options table in the third parameter rather than Data.")]),e._v(" "),t("li",[e._v("Automatic Execution: Commands can now contain an "),t("code",[e._v("AutoExec")]),e._v(" table which contains commands to execute immediately as the command is registered.\n"),t("ul",[t("li",[e._v("This is useful for registering aliases associated with your command or initializing state.")]),e._v(" "),t("li",[e._v("Commands listed in AutoExec are deferred until the end of the Lua cycle, which eliminates any possibility of ordering issues caused by commands being registered out of order.")])])])]),e._v(" "),t("h2",{attrs:{id:"utility-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utility-methods"}},[e._v("#")]),e._v(" Utility methods")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Util.MakeEnumType")]),e._v(" and "),t("code",[e._v("Util.MakeFuzzyFinder")]),e._v(" now accept "),t("code",[e._v("Enum")]),e._v("s and arrays of tables with a "),t("code",[e._v("Name")]),e._v(" key. (These functions can already accept: array of strings, array of Instances, array of EnumItems, or a single Instance whose children are used).")]),e._v(" "),t("li",[e._v("New functions "),t("code",[e._v("Util.Map")]),e._v(" and "),t("code",[e._v("Util.Each")]),e._v(" for mapping values of an array and tuple respectively.")]),e._v(" "),t("li",[e._v("New function "),t("code",[e._v("Util.MakeSequenceType")]),e._v(" for quickly creating a type that contains a value sequence, like Vector3 or Color3. The delimeter can be either "),t("code",[e._v(",")]),e._v(" or whitespace, checking "),t("code",[e._v(",")]),e._v(" first.")]),e._v(" "),t("li",[e._v("New functions "),t("code",[e._v("Util.SplitPrioritizedDelimeter")]),e._v(", "),t("code",[e._v("Util.ParseEscapeSequences")]),e._v(", and "),t("code",[e._v("Util.EmulateTabstops")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"bug-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug fixes")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("announce")]),e._v(" command text is now filtered through chat filter")]),e._v(" "),t("li",[e._v("Added an additional check that RoStrap is being used to help prevent false positives")]),e._v(" "),t("li",[e._v("Fixed a bug preventing command data from being accessible")])]),e._v(" "),t("h2",{attrs:{id:"roblox-ts-npm-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roblox-ts-npm-package"}},[e._v("#")]),e._v(" roblox-ts npm package")]),e._v(" "),t("p",[e._v("Cmdr is now available as an "),t("a",{attrs:{href:"https://www.npmjs.com/package/rbx-cmdr",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm package"),t("OutboundLink")],1),e._v(" for usage in "),t("a",{attrs:{href:"https://roblox-ts.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("roblox-ts"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=v.exports}}]);