import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
  ],
})

export class MaterialModule { }
