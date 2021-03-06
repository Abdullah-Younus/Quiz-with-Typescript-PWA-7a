import React from 'react';

export type QuestionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type Quiz = {
    question: string,
    answer: string,
    option: string[]
}

export type propType = {
    question: string,
    option: string[],
    callback: (e: React.FormEvent<EventTarget>, userSelect: any) => void,
    currentQuestion: number
}