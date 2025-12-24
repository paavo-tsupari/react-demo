import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'

export const Route = createFileRoute('/new')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const fileRef = useRef<HTMLInputElement | null>(null)

  function handleClick() {
    fileRef.current?.click()
  }
  function handleChange(e: any) {
    const file = e.target.files?.[0]
    console.log('Selected file:', file)
  }
  return (
    <Card className="w-full max-w-xl mx-auto w-full mt-10 p-5">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create new listing</FieldLegend>
            <FieldDescription>
              The listing will be public and anyone can bid.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input placeholder="t-shirt" required />
              </Field>
              <Field className="w-20">
                <FieldLabel>Price (€)</FieldLabel>
                <Input
                  id="price"
                  inputMode="decimal"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  required
                  className="pr-7"
                />
              </Field>
              <FieldLabel>Description</FieldLabel>
              <Textarea placeholder="A cozy shirt" className="resize-none" />
              <Input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
              <Button type="button" onClick={handleClick}>
                Upload Image
              </Button>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button
              onClick={() => navigate({ to: '/' })}
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  )
}
