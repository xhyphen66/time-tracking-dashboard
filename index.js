var hours = []

fetch("data.json")
    .then(response => response.json())
    .then(res => {
        hours = res
    })

const workDisplay = document.getElementById('work-hours')
const playDisplay = document.getElementById('play-hours')
const studyDisplay = document.getElementById('study-hours')
const exerciseDisplay = document.getElementById('exercise-hours')
const socialDisplay = document.getElementById('social-hours')
const scDisplay = document.getElementById('sc-hours')

const getHours = function (x) {
    var y
    if (x === 'daily') {
        y = 'Day'
    } else if (x === 'weekly') {
        y = 'Week'
    } else if (x === 'monthly') {
        y = 'Month'
    }
    hours.forEach(element => {
        if (element.title === 'Work') {
            workDisplay.innerText = `${element.timeframes[x].current}hrs`
            workDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        } else if (element.title === 'Play') {
            playDisplay.innerText = `${element.timeframes[x].current}hrs`
            playDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        } else if (element.title === 'Study') {
            studyDisplay.innerText = `${element.timeframes[x].current}hrs`
            studyDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        } else if (element.title === 'Exercise') {
            exerciseDisplay.innerText = `${element.timeframes[x].current}hrs`
            exerciseDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        } else if (element.title === 'Social') {
            socialDisplay.innerText = `${element.timeframes[x].current}hrs`
            socialDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        } else if (element.title === 'Self Care') {
            scDisplay.innerText = `${element.timeframes[x].current}hrs`
            scDisplay.nextElementSibling.innerText = `Last ${y} - ${element.timeframes[x].previous}hrs`
        }
    })
}

setTimeout(() => {
    getHours('daily')
}, 100);

const daily = document.getElementById('daily')
daily.addEventListener('click', () => {
    getHours('daily')
})
const weekly = document.getElementById('weekly')
weekly.addEventListener('click', () => {
    getHours('weekly')
})
const monthly = document.getElementById('monthly')
monthly.addEventListener('click', () => {
    getHours('monthly')
})

