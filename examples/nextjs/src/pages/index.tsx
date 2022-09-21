import { CurationComponent } from '@public-assembly/assemble-curation-factory-v2'

function Page() {
  
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-red-500">Maxs first test</h1>
      <CurationComponent curationText=" i am the shit" />
    </section>
  )
}

export default Page