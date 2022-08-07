var audio = new Audio("sounds/kick.mp3");

let game = {

    shells: 0,
    totalShells: 0,
    totalClicks: 0,
    clickValue: 1,
    version: 0.000,

    addShells: function(amount) {
        audio.play();
        this.shells += amount
        this.totalShells += amount
        display.updateShells()
    },

    getShellsPerSecond: function() {
        let shellsPerSecond = 0
        for (i = 0; i < building.name.length; i++) {
            shellsPerSecond += building.income[i] * building.count[i]
        }
        return shellsPerSecond
    }
}

function a() {
        audio.play();
        amount += 9999999999999999
        this.totalShells += amount
        display.updateShells()
    }


let building = {
    name: [
        'Cursor',
        'Leaf',
        'Farmer',
        'Factory',
        'Laws and legislation',
        'Alchemy',
        'DNA replication',
        'Javascript console'
    ],
    image: [
        'cursor.png',
        'leaf.png',
        'farmer.png',
        'factory.png',
        'laws-legislation.png',
        'alchemy.png',
        'dna.png',
        'console.png'
    ],
    count: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    income: [
        1,
        5,
        50,
        125,
        2,
        1000,
        9876,
        999999
    ],
    cost: [
        15,
        100,
        1000,
        10250,
        11111,
        100000,
        987654,
        1999999
    ],

    purchase: function(index) {
        if (game.shells >= this.cost[index]) {
            game.shells -= this.cost[index]
            this.count[index]++
            this.cost[index] = Math.round(this.cost[index] * 1.15)
            display.updateShells()
            display.updateShop()
            display.updateUpgrades()
        }
    }
}

let upgrade = {
    name: [
        'Baby Fingers',
        'Teen Fingers',
        'Professional Fingers',
        'Gold Fingers',
        'Robotic Fingers',
        'Stone Clicker',
        'Iron Clicker',
        'Diamond Clicker',
        'Olive Oil free',
        'No sticking',
        'No gas',
        'Sponsored Snail Food',
        'Emotional Support',
        'Snail Seeds!',
        'Taylorism',
        'Fordism',
        'Toyotism',
        'Eat Shell',
        'Only animal allowed in the world',
        'The Snaillegion',
        'Gold',
        'Wood',
        'Air',
        'A strong mutation',
        'You have ascended'
    ],
    description: [
        'Your Clicks worth twice as much you baby',
        'Pretty confident hm? Your Clicks are 10 times more efficent',
        'Your life is clickng a snail. Your clicks worth 100 times more',
        'Holy moly that is what i call clicking. Your clicks worth 10 times more',
        'Ok you are using auto clicker right?. 123 times more',
        'Cursors are twice as efficient',
        'Cursor are thrice as efficient',
        'Cursor are ten times as efficient',
        'Leafs are twice as efficent',
        'Leafs are thrice as efficient',
        'Leafs are ten times as efficient',
        'Farmers are twice as efficent',
        'Farmers are thrice as efficient',
        'Farmers are ten times as efficient',
        'Factories are twice as efficent',
        'Factories are thrice as efficient',
        'Factories are ten times as efficient',
        'New law, everybody have to eat shell in all meals, 100x shells',
        'New law, it is only allowed to have snails, 10x shells',
        'New RELIGON, the Snaillegion, 50x shells',
        'You can transform gold in shell. Alchemy times 2',
        'You can transform wood in shell. Alchemy times 3',
        'You can transform air in shell. Alchemy times 10',
        'All snails have the tastiest shells. DNA replication x10',
        'game.shells = 99999999, now this hole universe is in your hands.'
    ],
    image: [
        'baby-fingers.png',
        'teen-fingers.png',
        'professional-fingers.png',
        'gold-fingers.png',
        'robotic-fingers.png',
        'stone-clicker.png',
        'iron-clicker.png',
        'diamond-clicker.png',
        'olive-oil-free.png',
        'no-sticking.png',
        'no-gas.png',
        'sponsored-food.jpeg',
        'emotional-support.jpeg',
        'snail-seeds.png',
        'taylorism.jpeg',
        'fordism.jpeg',
        'toyotism.jpeg',
        'eat-shell.png',
        'only-snail.jpeg',
        'snail-religion.jpeg',
        'gold.jpeg',
        'wood.jpeg',
        'air.jpeg',
        'strong-mutation.jpeg',
        'ascend.png'
    ],
    type: [
        'click',
        'click',
        'click',
        'click',
        'click',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building',
        'building'
    ],
    cost: [
        '350',
        '4000',
        '50000',
        '600000',
        '77777777',
        '300',
        '3000',
        '30000',
        '4000',
        '40000',
        '400000',
        '50000',
        '500000',
        '5000000',
        '600000',
        '6000000',
        '60000000',
        '11111',
        '22222222',
        '3333333333',
        '7000000',
        '70000000',
        '700000000',
        '8000000000',
        '99999999999',
    ],
    buildingIndex: [
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        0,
        0,
        1,
        1,
        1,
        2,
        2,
        2,
        3,
        3,
        3,
        4,
        4,
        4,
        5,
        5,
        5,
        6,
        7
    ],
    requirement: [
        100,
        1000,
        10000,
        100000,
        1000000,
        10,
        50,
        100,
        10,
        25,
        50,
        10,
        20,
        30,
        10,
        20,
        30,
        1,
        20,
        35,
        5,
        10,
        15,
        5,
        1
    ],
    bonus: [
        2,
        10,
        100,
        10,
        123,
        2,
        3,
        10,
        2,
        3,
        10,
        2,
        3,
        10,
        2,
        3,
        10,
        100,
        10,
        50,
        2,
        3,
        10,
        10,
        1
    ],
    purchased: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],

    purchase: function(index) {
        if (!this.purchased[index] && game.shells >= this.cost[index]) {
            if (this.type[index] == 'building' && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
                game.shells -= this.cost[index]
                building.income[this.buildingIndex[index]] *= this.bonus[index]
                this.purchased[index] = true

                display.updateUpgrades()
                display.updateShells()
            } else if (this.type[index] == 'click' && game.totalClicks >= this.requirement[index]) {
                game.shells -= this.cost[index]
                game.clickValue *= this.bonus[index]
                this.purchased[index] = true

                display.updateUpgrades()
                display.updateShells()
            }
        }
    }
}

let achievement = {
    name: [
        'A Humble Start',
        'The middle of the Road',
        'The Beginning of the end',
        'Click',
        'Clicks',
        'Super Clicks',
        'Clicktastic',
        'Auto Clicker',
        'The beginning of something',
        'Huh a fresh shell save a slice',
        'Ok',
        'That is ok',
        'That is ok stop',
        'STOP',
        'ITS ENOUGH BACON'
    ],
    description: [
        'Buy 1 cursor',
        'Buy 1 Laws and Legislation',
        'Buy 1 Javascript Console',
        'Click the snail 1 time',
        'Click the snail 1000 time',
        'Click the snail 10000 time',
        'Click the snail 100000 time',
        'Click the snail 1000000 time',
        'Gather 1 shell',
        'Gather 1000 shells',
        'Gather 100000 shells',
        'Gather 1000000 shells',
        'Gather 100000000 shells',
        'Gather 1000000000 shells',
        'Gather 99999999999 shells'
    ],
    image: [
        'humble-start.png',
        'middle-road.png',
        'beginning-end.png',
        'click.png',
        'clicks.png',
        'super-clicks.png',
        'clicktastic.png',
        'auto-clicker.jpeg',
        'shell.png',
        'fresh-shell.png',
        'ok.png',
        'that-ok.png',
        'that-ok-stop.png',
        'stop.png',
        'enough.png'
    ],
    type: [
        'building',
        'building',
        'building',
        'click',
        'click',
        'click',
        'click',
        'click',
        'shells',
        'shells',
        'shells',
        'shells',
        'shells',
        'shells',
        'shells'
    ],
    requirement: [
        1,
        1,
        1,
        1,
        1000,
        10000,
        100000,
        1000000,
        1,
        1000,
        100000,
        1000000,
        100000000,
        1000000000,
        99999999999
    ],
    objectIndex: [
        0,
        4,
        7,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1
    ],
    awarded: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ],

    earn: function(index) {
        this.awarded[index] = true
    }
}

let display = {
    updateShells: function() {
        document.getElementById('shells').textContent = game.shells
        document.getElementById('shellspersecond').textContent = game.getShellsPerSecond()
        document.title = game.shells + ' shells - Snail Clicker'
    },

    updateShop: function() {
        document.getElementById('shopContainer').innerHTML = ""
        for (i = 0; i < building.name.length; i++) {
            document.getElementById('shopContainer').innerHTML += '<table class="shopButton" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/buildings/'+building.image[i]+'" alt="a photo of a cursor, click to buy"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p><sleaf>'+building.cost[i]+'</sleaf> shells</p></td><td id="amount"><sleaf>'+building.count[i]+'</sleaf></td></tr></table>'
        }
    },

    updateUpgrades: function() {
        document.getElementById('upgradeContainer').innerHTML = ""
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == 'building' && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById('upgradeContainer').innerHTML += '<img src="images/upgrades/'+upgrade.image[i]+'" title="'+upgrade.name[i]+'&#10;'+upgrade.description[i]+'&#10;('+upgrade.cost[i]+' shells)" onclick="upgrade.purchase('+i+')">'
                } else if (upgrade.type[i] == 'click' && game.totalClicks >= upgrade.requirement[i]) {
                    document.getElementById('upgradeContainer').innerHTML += '<img src="images/upgrades/'+upgrade.image[i]+'" title="'+upgrade.name[i]+'&#10;'+upgrade.description[i]+'&#10;('+upgrade.cost[i]+' shells)" onclick="upgrade.purchase('+i+')">'
                }
            }
        }
    },

    updateAchievements: function() {
        document.getElementById('achievementContainer').innerHTML = ""
        for (i = 0; i < achievement.name.length; i++) {
            if (achievement.awarded[i]) {
                document.getElementById('achievementContainer').innerHTML += '<img src="images/achievements/'+achievement.image[i]+'" title="'+achievement.name[i]+'&#10;'+achievement.description[i]+'">'
            }
        }
    }
}

function saveGame() {
    let gameSave = {
        shells: game.shells,
        totalShells: game.totalShells,
        totalClicks: game.totalClicks,
        clickValue: game.clickValue,
        version: game.version,
        buildingCount: building.count,
        buildingIncome: building.income,
        buildingCost: building.cost,
        upgradePurchased: upgrade.purchased,
        achievementAwarded: achievement.awarded 
    }
    localStorage.setItem('gameSave', JSON.stringify(gameSave))
}

function loadGame() {
    let savedGame = JSON.parse(localStorage.getItem('gameSave'))
    if (localStorage.getItem('gameSave') !== null) {
        if (typeof savedGame.shells !== 'undefined') game.shells = savedGame.shells
        if (typeof savedGame.totalShells !== 'undefined') game.totalShells = savedGame.totalShells
        if (typeof savedGame.totalClicks !== 'undefined') game.totalClicks = savedGame.totalClicks
        if (typeof savedGame.clickValue !== 'undefined') game.clickValue = savedGame.clickValue
        if (typeof savedGame.buildingCount !== 'undefined') {
            for (i = 0; i < savedGame.buildingCount.length; i++) {
                building.count[i] = savedGame.buildingCount[i]
            }
        }
        if (typeof savedGame.buildingIncome !== 'undefined') {
            for (i = 0; i < savedGame.buildingIncome.length; i++) {
                building.income[i] = savedGame.buildingIncome[i]
            }
        }
        if (typeof savedGame.buildingCost !== 'undefined') {
            for (i = 0; i < savedGame.buildingCost.length; i++) {
                building.cost[i] = savedGame.buildingCost[i]
            }
        }
        if (typeof savedGame.upgradePurchased !== 'undefined') {
            for (i = 0; i < savedGame.upgradePurchased.length; i++) {
                upgrade.purchased[i] = savedGame.upgradePurchased[i]
            }
        }
        if (typeof savedGame.achievementAwarded !== 'undefined') {
            for (i = 0; i < savedGame.achievementAwarded.length; i++) {
                achievement.awarded[i] = savedGame.achievementAwarded[i]
            }
        }
    }
}

function resetGame() {
    if (confirm('Are you sure you want to reset your game?')) {
        let gameSave = {}
        localStorage.setItem("gameSave", JSON.stringify(gameSave))
        location.reload()
    }
}

document.getElementById('clicker').addEventListener('click', function(event) {
    game.totalClicks++
    game.addShells(game.clickValue)

    createNumberOnClick(event)
}, false)

function createNumberOnClick(event) {
    // Grab the clicker
    let clicker = document.getElementById('clicker')

    //Grab mouse postion
    let clickerOffset = clicker.getBoundingClientRect()
    let position = {
        x: event.pageX - clickerOffset.left + randomNumber(-3, 3),
        y: event.pageY - clickerOffset.top
    }

    // Create the number with img
    let element = document.createElement('div')
    element.textContent = '+' + game.clickValue
    element.innerHTML += '<img src="images/achievements/shell.png" height="24px" width="24px">'
    element.classList.add('number', 'unselectable')
    element.style.left = position.x + 'px'
    element.style.top = position.y + 'px'

    //Add the number to the clicker
    clicker.appendChild(element)

    // Slowly rise and fade out element
    let opacity = 1
    let movementInverval = window.setInterval(function(){
        if (typeof element == 'undefined' && element == null) clearInterval(movementInverval)

        position.y --
        element.style.top = position.y + 'px'

        element.style.opacity = opacity

        opacity -= 25 / 3000
        if (opacity <= 0.1) {
            element.remove()
        }
    }, 10)
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

window.onload = function() {
    loadGame()
    display.updateShells()
    display.updateUpgrades()
    display.updateAchievements()
    display.updateShop()
}

setInterval(function() {
    for (i = 0; i < achievement.name.length; i++) {
        if (achievement.type[i] == 'shells' && game.totalShells >= achievement.requirement[i]) achievement.earn(i)
        else if (achievement.type[i] == 'click' && game.totalClicks >= achievement.requirement[i]) achievement.earn(i)
        else if (achievement.type[i] == 'building' && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i)
    }
    game.shells += game.getShellsPerSecond()
    game.totalShells += game.getShellsPerSecond()
    display.updateShells()
    display.updateAchievements()
}, 1000) // 1 sec

setInterval(function() {
    display.updateShells()
    display.updateUpgrades()
}, 10000) // 10 sec

setInterval(function () {
    saveGame()
}, 30000) // 30 sec

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key == 's') { // ctrl + s
        event.preventDefault()
        saveGame()
    }
}, false)
