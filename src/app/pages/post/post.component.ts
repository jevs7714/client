import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

    posts = [
    {
        title: "Introduction to JavaScript",
        content: "JavaScript is a versatile programming language primarily used for web development."
    },
    {
        title: "Understanding Arrays",
        content: "Arrays are a collection of items stored at contiguous memory locations."
    },
    {
        title: "Object-Oriented Programming",
        content: "OOP is a programming paradigm based on the concept of 'objects', which can contain data and code."
    },
    {
        title: "Asynchronous JavaScript",
        content: "Asynchronous programming allows for non-blocking code execution, making applications more efficient."
    },
    {
        title: "JavaScript ES6 Features",
        content: "ES6 introduced new syntax and features such as arrow functions, classes, and template literals."
    }
];





}
