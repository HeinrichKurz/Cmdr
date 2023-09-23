"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{54413:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Returns a new ArgumentContext, an object that handles parsing and validating arguments","params":[{"name":"command","desc":"The command that owns this argument","lua_type":"CommandContext"},{"name":"argumentDefinition","desc":"The raw argument definition","lua_type":"ArgumentDefinition"},{"name":"value","desc":"The raw, unparsed value","lua_type":"any"}],"returns":[{"desc":"","lua_type":"ArgumentContext"}],"function_type":"static","private":true,"source":{"line":113,"path":"Cmdr/Shared/Argument.lua"}},{"name":"GetDefaultAutocomplete","desc":"","params":[],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","private":true,"source":{"line":156,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Transform","desc":"Calls the transform function on this argument.\\nThe return value(s) from this function are passed to all of the other argument methods.\\nCalled automatically at instantiation.","params":[],"returns":[],"function_type":"method","private":true,"source":{"line":173,"path":"Cmdr/Shared/Argument.lua"}},{"name":"TransformSegment","desc":"","params":[{"name":"rawSegment","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"any\\r\\n"}],"function_type":"method","private":true,"source":{"line":266,"path":"Cmdr/Shared/Argument.lua"}},{"name":"GetTransformedValue","desc":"Returns the transformed value from this argument, see Types.","params":[{"name":"segment","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"...any\\r\\n"}],"function_type":"method","source":{"line":278,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Validate","desc":"Validates that the argument will work without any type errors.","params":[{"name":"isFinal","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"","lua_type":"string?"}],"function_type":"method","private":true,"source":{"line":289,"path":"Cmdr/Shared/Argument.lua"}},{"name":"GetAutocomplete","desc":"Gets a list of all possible values that could match based on the current value.","params":[],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","private":true,"source":{"line":330,"path":"Cmdr/Shared/Argument.lua"}},{"name":"ParseValue","desc":"","params":[{"name":"i","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","private":true,"source":{"line":343,"path":"Cmdr/Shared/Argument.lua"}},{"name":"GetValue","desc":"Returns the parsed (final) value for this argument.","params":[],"returns":[{"desc":"","lua_type":"any\\r\\n"}],"function_type":"method","source":{"line":356,"path":"Cmdr/Shared/Argument.lua"}}],"properties":[{"name":"Command","desc":"The command that this argument belongs to.","lua_type":"CommandContext","readonly":true,"source":{"line":25,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Type","desc":"The type definition for this argument.","lua_type":"TypeDefinition","readonly":true,"source":{"line":32,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Name","desc":"The name of this argument, shown on the autocomplete interface.","lua_type":"string","readonly":true,"source":{"line":39,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Object","desc":"The raw argument definition.","lua_type":"ArgumentDefinition","readonly":true,"source":{"line":46,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Required","desc":"Whether or not this argument was required.","lua_type":"boolean","readonly":true,"source":{"line":53,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Executor","desc":"The player that ran the command that this argument belongs to.","lua_type":"Player","readonly":true,"source":{"line":60,"path":"Cmdr/Shared/Argument.lua"}},{"name":"RawValue","desc":"The raw, unparsed value for this argument.","lua_type":"string","readonly":true,"source":{"line":67,"path":"Cmdr/Shared/Argument.lua"}},{"name":"RawSegments","desc":"An array of strings representing the values in a comma-separated list, if applicable.","lua_type":"{string}","readonly":true,"source":{"line":74,"path":"Cmdr/Shared/Argument.lua"}},{"name":"Prefix","desc":"The prefix used in this argument (like `%` in `%Team`). Empty string if no prefix was used. See [Prefixed Union Types](/docs/commands#prefixed-union-types) for more details.","lua_type":"string","readonly":true,"source":{"line":81,"path":"Cmdr/Shared/Argument.lua"}},{"name":"TextSegmentInProgress","desc":"The text of the raw segment the user is currently typing.","lua_type":"any","private":true,"source":{"line":88,"path":"Cmdr/Shared/Argument.lua"}},{"name":"RawSegmentsAreAutocomplete","desc":"","lua_type":"boolean","private":true,"source":{"line":94,"path":"Cmdr/Shared/Argument.lua"}},{"name":"TransformedValues","desc":"The transformed value (generated later).","lua_type":"{any}","private":true,"source":{"line":101,"path":"Cmdr/Shared/Argument.lua"}}],"types":[],"name":"ArgumentContext","desc":"Represents an individual argument within an individual command execution.","source":{"line":15,"path":"Cmdr/Shared/Argument.lua"}}')}}]);