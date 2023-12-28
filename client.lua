local display = false
local msg = nil

function input(type, bool, text)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = type,
        status = bool,
        text = text,
        lang = Config.Locale
    })
end

RegisterNUICallback('send', function(data)
	msg = data.input
end)

RegisterNUICallback('exit', function(data)
    input('input', false)
end)


exports('Input', function(type, text)
	input(type, true, text)
	while msg == nil do 
		Wait(1)
	end
	newmsg = msg
	msg = nil 
    return newmsg
end)


-- Text Input field
-- CreateThread(function()
-- 		while true do
-- 			if IsControlJustReleased(0, 38) then 
--	 			print(exports['Lux_Inputs']:Input('input', 'Title'))
--	 		end
--	 	Wait(0)
--	 	end
-- end)

-- Number Input field
-- CreateThread(function()
-- 		while true do
-- 			if IsControlJustReleased(0, 38) then 
--	 			print(exports['Lux_Inputs']:Input('number', 'Title'))
--	 		end
--	 	Wait(0)
--	 	end
-- end)

-- Password Input field
-- CreateThread(function()
-- 		while true do
-- 			if IsControlJustReleased(0, 38) then 
--	 			print(exports['Lux_Inputs']:Input('password', 'Title'))
--	 		end
--	 	Wait(0)
--	 	end
-- end)